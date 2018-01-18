---
author: StevenTTuD
title: "OLTP 與 OLAP"
published: true
date: 2017-12-22 14:11
tags:
  - Database
comments: true
---

## 什麼是 OLTP?

最近在讀資料庫文件的時候接觸到 `OLTP` 這個名詞，大致上理解並比記下來。
數據處理大致可以分成兩類: OLTP 與 OLAP。OLTP (Online Analytical Processing)指的就是傳統式關聯式資料庫。用在日常的的事物處理，比如說資料庫的增、刪、查、改。有以下特性:

- 並發性高
- 嚴格要求事務的種安全性
- Realtime 要求高

## 什麼是 OLAP?

OLAP (On-Line Analytical Processing) - 數據分析處理。是一個以決策為導向的數據處理方式，針對你想要做的決策，動態處理資料，用多種維度來解讀資料，讓高階主管可以做出更好的決策。

OLAP支援的分析包刮下列幾點:

- 階層式維度與資料的模組化
- 趨勢分析
- 解讀深層資訊
- 於視覺範圍內轉換於另一維度以作比較

個人覺得認為 OLAP 更像一種分析方法論，與現今的資料視覺概念相似，將資料經過加工處理後，由萃取出來的數據來幫助做決策。

## 比較表

![](https://lh3.googleusercontent.com/-_3M8urfGsMo/Wl8lC5-jcoI/AAAAAAAALBE/YIn4itw9oDAxRkQX0GOwY45PwU-dt4PEgCHMYCw/I/15142609010075.jpg)

## Reference

[OLTP vs. OLAP](https://courses.cs.washington.edu/courses/cse592/01sp/lectures/class1/sld025.htm)
[OLAP example](http://info.csvs.chc.edu.tw/bbhuang/homework%5C8716ds03.htm)


