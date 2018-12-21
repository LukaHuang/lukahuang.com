---
author: StevenTTuD
title: "Mysql - 如何修改 partition 並還原資料"
published: true
date: 2018-03-04 12:50
tags:
  - Database
  - Mysql
comments: true
---

## 情境

在測試環境中我們想要置換 partition 的分區方式，而我們不想要遺失測試資料，所以需要備份 partition table 的資料。因為要修改的資料欄位很多，我不想要直接使用 alter table 的方式來修改 partition 分區，取而代之的是，我想要用 Migration 的方式來管理，所以會採用先備份 -> 修改 -> 接著再還原的方式。

## 深入了解 mysqldump

一般我們在備份還原的時候會使用 Mysqldump，並使用還原指令來還原。但是因為這次我需要回復的資料已經經過 Partition 分區了。用一般的回復方式很可能會失敗。秉持的實驗精神，我就來看看 mysqldump 到底是怎麼運作的。輸入指令備份資料庫：

```
mysqldump -u username -p your_database > dump.sql
```

產生出來的檔案我們打開來看:

```sql
# dump.sql
-- MySQL dump 10.13  Distrib 5.7.20, for osx10.11 (x86_64)
--
-- Host: localhost    Database: log_sharding
-- ------------------------------------------------------
-- Server version	5.7.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alert_logs`
--

DROP TABLE IF EXISTS `alert_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alert_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alert_id` int(11) DEFAULT NULL,
  `alert_code` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `alert_name` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `alert_time` datetime DEFAULT NULL,
  `alert_status` tinyint(2) DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT '2055-06-01 00:00:00',
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`,`created_at`),
) ENGINE=InnoDB AUTO_INCREMENT=4899 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
/*!50500 PARTITION BY RANGE  COLUMNS(alert_time)
(PARTITION p001 VALUES LESS THAN ('2018-01-01 00:00:00') ENGINE = InnoDB,
 PARTITION p002 VALUES LESS THAN ('2018-02-01 00:00:00') ENGINE = InnoDB,
 PARTITION p003 VALUES LESS THAN ('2018-03-01 00:00:00') ENGINE = InnoDB,
 PARTITION p004 VALUES LESS THAN ('2018-04-01 00:00:00') ENGINE = InnoDB,
 .
 .
 .
 .
 PARTITION p451 VALUES LESS THAN (MAXVALUE) ENGINE = InnoDB) */;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Dumping data for table `alert_logs`
--

LOCK TABLES `alert_logs` WRITE;
/*!40000 ALTER TABLE `alert_logs` DISABLE KEYS */;
# This is fake data
INSERT INTO `alert_logs` VALUES (16,4),(49,12),(9,14),(21,17),(11,57),(71,63),(270,91),(86,180),(125,193),(99,201),(189,385),(271,390),(225,415),(305,484),(251,543),(309,545),(257,579),(258,581),(260,585),(261,588),(279,667);
/*!40000 ALTER TABLE `alert_logs` ENABLE KEYS */;
UNLOCK TABLES;

```

這不就是 SQL 的指令嘛？ 邏輯如下:

1. 如果 `alert_logs` table 已經存在，就刪除掉並使用 Dump File 內的備份指令重新建立 `alert_logs` table
2. lock 住整個 table 並加入資料。

從這些步驟我們可以觀察到即使 db 內已經存在 alert_logs table 了，使用 dump.sql 還原時仍然會先刪除 alert_logs table，再使用 dump.sql 中的 schema 來重建 table。

知道這些情報之後 partition 的 backup 與 restore 有了頭緒。

## Partition backup and restore

首先備份原先的 partition

```sql
mysqldump -h 'your-my-sql-ip' -u your_user_name -p your_database_name table_name_1 table_name_2 --no-create-info  --ssl-ca=your_ssl.pem > dump.sql
```

關鍵在於: 需要加上 `--no-create-info` 產生的 dump.sql 不會把本來的 table 刪除，直接 insert 資料。

```sql
# dump.sql
-- MySQL dump 10.13  Distrib 5.7.20, for osx10.11 (x86_64)
--
-- Host: localhost    Database: pro_devel
-- ------------------------------------------------------
-- Server version	5.7.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--alert_logs
-- Dumping data for table `alert_logs`
--

LOCK TABLES `alert_logs` WRITE;
/*!40000 ALTER TABLE `alert_logs` DISABLE KEYS */;
INSERT INTO `alert_logs` VALUES (16,4),(49,12),(9,14),(21,17),(11,57),(71,63),(270,91),(86,180),(125,193),(99,201),(189,385),(271,390),(225,415),(305,484),(251,543),(309,545),(257,579),(258,581),(260,585),(261,588),(279,667);
/*!40000 ALTER TABLE `alert_logs` ENABLE KEYS */;
UNLOCK TABLES;
```

備份完資料後我們將原有的 database 刪除

```
DROP TABLE alert_logs;
```

用新的 create partition 方法建立 table，將本來用 alert_time 做分區，改成用 created_at 做分區。

```
CREATE TABLE `alert_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alert_id` int(11) DEFAULT NULL,
  `alert_code` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `alert_name` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `alert_time` datetime DEFAULT NULL,
  `alert_status` tinyint(2) DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT '2055-06-01 00:00:00',
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`,`created_at`),
) ENGINE=InnoDB AUTO_INCREMENT=4899 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
/*!50500 PARTITION BY RANGE  COLUMNS(created_at)
(PARTITION p001 VALUES LESS THAN ('2018-01-01 00:00:00') ENGINE = InnoDB,
 PARTITION p002 VALUES LESS THAN ('2018-02-01 00:00:00') ENGINE = InnoDB,
 PARTITION p003 VALUES LESS THAN ('2018-03-01 00:00:00') ENGINE = InnoDB,
 PARTITION p004 VALUES LESS THAN ('2018-04-01 00:00:00') ENGINE = InnoDB,
 .
 .
 .
 .
 PARTITION p451 VALUES LESS THAN (MAXVALUE) ENGINE = InnoDB) */;
/*!40101 SET character_set_client = @saved_cs_client */;
```

最後將資料還原

```
mysql -u username -p database_name < dump.sql
```

檢視一下目前的 table

```sql
SHOW CREATE TABLE alert_logs;
```

確認結果是否正確
檢視一下目前的 table

```sql
SHOW CREATE TABLE alert_logs;
```

輸出

```sql
CREATE TABLE `alert_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alert_id` int(11) DEFAULT NULL,
  `alert_code` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `alert_name` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `alert_time` datetime DEFAULT NULL,
  `alert_status` tinyint(2) DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`,`created_at`),
) ENGINE=InnoDB AUTO_INCREMENT=4899 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
/*!50500 PARTITION BY RANGE  COLUMNS(created_at)
(PARTITION p001 VALUES LESS THAN ('2018-01-01 00:00:00') ENGINE = InnoDB,
 PARTITION p002 VALUES LESS THAN ('2018-02-01 00:00:00') ENGINE = InnoDB,
 PARTITION p003 VALUES LESS THAN ('2018-03-01 00:00:00') ENGINE = InnoDB,
 PARTITION p004 VALUES LESS THAN ('2018-04-01 00:00:00') ENGINE = InnoDB,
 .
 .
 .
 .
 PARTITION p451 VALUES LESS THAN (MAXVALUE) ENGINE = InnoDB) */;
/*!40101 SET character_set_client = @saved_cs_client */;
```

確認建立 table 的資料無誤後，
進入 Rails console 試試看 AlertLog 是否可以正常存取，
這樣就完成了整個 partition 轉換並還原的流程。

### 地雷 - created_at

需要特別注意的是 - partition 中 為 key 的值一定必須是 `NOT NULL`，且`不要設 DEFAULT VALUE`，否則 Rails 不會幫你自動填入 created_at。

## Rails Migration

如果你使用的是 Rails Migration，步驟是:

1. backup entire database
1. dump the partition database
1. rake db:rollback
1. modify migration of partition
1. rake db:migrate
1. restore partition database


## 參考資料

[DBAStuff: Mysql Dump and partitions](http://www.dbastuff.net/2014/09/mysql-dump-and-partitions.html)

