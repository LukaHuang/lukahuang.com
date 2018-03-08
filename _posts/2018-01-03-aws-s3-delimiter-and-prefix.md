---
author: StevenTTuD
title: "[譯] Amazon S3 Delimiter and Prefix"
published: true
date: 2018-01-03 12:50
tags:
  - AWS
  - S3
comments: true
---

> From: [Amazon S3 Delimiter and Prefix - realguess](https://realguess.net/2014/05/24/amazon-s3-delimiter-and-prefix/)
posted at 2014/05/24

[AWS S3](https://aws.amazon.com/tw/s3/) 是一個不昂貴的線上檔案儲存服務，我們可以透過 [javascript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html) 來使用 S3。當我使 SDK 的時候有以下幾件令人疑惑的事情:

1. 如何使用參數 `Delimiter` 和 `Prefix` ?
2. `CommonPrefixes` 與 `Contents` 的差別是什麼?
3. 如何透過 Javascript SDK 建立 folder / directory

取回在 Amazon S3 Bucket 的物件得操作 (operation) 是 `listObject`. `listObjects` 不會回傳 (return) 物件的內容, 而會回傳 key 與 meta data 像是物件的大小 (size) 或是物件的擁有者。

使用指令呼叫以取得 bucket 中的物件清單:

```js
s3.listObjects(params, function (err, data) {
  // ...
});
```

`params` 可以設置以下的參數:

- Bucket
- Delimiter
- EncodingType
- Marker
- MaxKeys
- Prefix

但是什麼是 `Delimeter` 和 `Prefix`? 如何使用他們?

我們開始在 S3 中創建一些物件，格式如下方的檔案結構。這可以用 Aws Console 很快的完成。

```
.
├── directory
│   ├── directory
│   │   └── file
│   └── file
└── file
2 directories, 3 files
```

在 Amazon S3 中，這些物件為:

```
directory/
directory/directory/
directory/directory/file
directory/file
file
```

一個需要留心的事情是 S3 不是檔案系統。S3 並沒有真正的檔案或是資料夾的概念。
從 Console 中看到的是 2 個資料夾和 3 個檔案。但是它們全部都是物件。這些物件
會用他們的 Key 值按照字母排序。

為了讓概念更清楚點，我們來調用 (invoke) 方法 `listObjects`。而這個操作只需要參數 `Bucket`。

```
params = {
  Bucket: 'example'
};
```

Response `data` 包含下列的 callback function:

```json
{ Contents:
   [ { Key: 'directory/',
       LastModified: ...,
       ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
       Size: 0,
       Owner: [Object],
       StorageClass: 'STANDARD' },
     { Key: 'directory/directory/',
       LastModified: ...,
       ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
       Size: 0,
       Owner: [Object],
       StorageClass: 'STANDARD' },
     { Key: 'directory/directory/file',
       LastModified: ...,
       ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
       Size: 0,
       Owner: [Object],
       StorageClass: 'STANDARD' },
     { Key: 'directory/file',
       LastModified: ...,
       ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
       Size: 0,
       Owner: [Object],
       StorageClass: 'STANDARD' },
     { Key: 'file',
       LastModified: ...,
       ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
       Size: 0,
       Owner: [Object],
       StorageClass: 'STANDARD' } ],
  CommonPrefixes: [],
  Name: 'example',
  Prefix: '',
  Marker: '',
  MaxKeys: 1000,
  IsTruncated: false }
```

如果有檔案結構，你會期待是:

```
directory/
file
```

但是並沒有，因為 bucket 運作的方式不像是 folder 或是 directory, 能夠顯示
directory 中的檔案。檔案在 bucket 中會全部攤開來並且照字母排列。

在 Unit 中, directory 是檔案, 但是在 Amazon S3 中, 所有的東西都是物件,
並且他們用 key 來識別。

所以，該如何讓 Amazon S3 表現的更像是 folder 或是 directory？ 或如何顯示 Bucket 中的第一層右邊的內容?

為了讓 S3 顯示的更像是 director, 你必須使用 `Delimiter` 和 `Prefix`. `Delimeter` 讓你可以為 key 分組 (use to group keys)。它必須是一個字元或者一個字串。`Prefix` 限制 response 開始於特別的 prefix。

## Delimiter

我們開始加入下列的 `delimiter`:

```
params = {
  Bucket: 'example',
  Delimiter: '/'
};
```

你會取得像是 directory 清單的一些資訊:

```
{ Contents:
   [ { Key: 'file' } ],
  CommonPrefixes: [ { Prefix: 'directory/' } ],
  Name: 'example',
  Prefix: '',
  MaxKeys: 1000,
  Delimiter: '/',
  IsTruncated: false }
```

有一個資料夾叫做 `directory/` 和一個檔案叫做 `file`. 發生的事情是下列的物件接受檔案被 delimeter `/` 分組。

```
directory/
directory/directory/
directory/directory/file
directory/file
file
```

所以，結果是:

```
directory/
file
```

這感覺像是 `directory` 或是 `folder` 的清單。但如果我們把 `Delimeter` 改成 `i`, 接著你會取得空的 `Contents` 和 prefix。

```
{ Contents: [],
  CommonPrefixes: [ { Prefix: 'di' }, { Prefix: 'fi' } ],
  Name: 'example',
  Prefix: '',
  MaxKeys: 1000,
  Delimiter: 'i',
  IsTruncated: false }
```

所有的 key 被 `di` 和 `fi` 這兩個 prefix 分組。因此，Amazon S3 不是檔案系統, 但是他們如果可以設定對的參數，那他們看起來就會像是檔案系統。

如之前提到的 `Delimeter` 不需要是單一的字元:

```
{ Contents:
   [ { Key: 'directory/' },
     { Key: 'directory/file' },
     { Key: 'file' } ],
  CommonPrefixes: [ { Prefix: 'directory/directory' } ],
  Name: 'example',
  Prefix: '',
  MaxKeys: 1000,
  Delimiter: '/directory',
  IsTruncated: false }
```

回想 bucket 的結構:

```
directory/
directory/directory/
directory/directory/file
directory/file
file
```

由於分組字串`/directory`，`directory/directory/` 和 `directory/directory/file` 被 prefix `directory/directory` 分組了。

我們來試試其他的 `Delimiter: 'directory'`

```
{ Contents:
   [ { Key: 'file' } ],
  CommonPrefixes: [ { Prefix: 'directory' } ],
  Name: 'example',
  Prefix: '',
  MaxKeys: 1000,
  Delimiter: 'directory',
  IsTruncated: false }
```

好，接著來試試 `ry/fi`

```
{ Contents:
   [ { Key: 'directory/' },
     { Key: 'directory/directory/' },
     { Key: 'file' } ],
  CommonPrefixes:
   [ { Prefix: 'directory/directory/fi' },
     { Prefix: 'directory/fi' } ],
  Name: 'example,
  Prefix: '',
  MaxKeys: 1000,
  Delimiter: 'ry/fi',
  IsTruncated: false }
```

所以記得 `Delimeter` 只是提供將 key 分組的功能。如果你想要他們表現的像是
檔案系統，那麼使用 `Delimiter: '/'`。

## Prefix

`Prefix` 更易於理解。它利用前綴來過濾(filter) keys。

相同的結構:

```
directory/
directory/directory/
directory/directory/file
directory/file
file
```

我們來設定 `Prefix` 參數值為 `directory`:

```
{ Contents:
   [ { Key: 'directory/' },
     { Key: 'directory/directory/' },
     { Key: 'directory/directory/file' },
     { Key: 'directory/file' } ],
  CommonPrefixes: [],
  Name: 'example',
  Prefix: 'directory',
  MaxKeys: 1000,
  IsTruncated: false }
```

看看設定成 `directory/` 會怎麼樣:

```
{ Contents:
   [ { Key: 'directory/' },
     { Key: 'directory/directory/' },
     { Key: 'directory/directory/file' },
     { Key: 'directory/file' } ],
  CommonPrefixes: [],
  Prefix: 'directory/' }
```

prefix 設成 `directory` 和 `directory/` 是一樣的。
如果我們嘗試一些不一樣的, `Prefix: 'directory/d'`:

```
{ Contents:
   [ { Key: 'directory/directory/' },
     { Key: 'directory/directory/file' } ],
  CommonPrefixes: [],
  Prefix: 'directory/d' }
```

同時使用 `Delimiter: 'directory'` and` Prefix: 'directory'`:

```
{ Contents:
   [ { Key: 'directory/' },
     { Key: 'directory/file' } ],
  CommonPrefixes: [ { Prefix: 'directory/directory' } ],
  Prefix: 'directory',
  Delimiter: 'directory' }
```

第一步，列出 prefix 是 `directory` 的清單:

```
directory/
directory/directory/
directory/directory/file
directory/file
```

用 delimiter `directory` 與 prefix `directory` 來分組:

```
directory/directory
```

結果的 `Contents` 會是:

```
directory/
directory/file
```

`CommonPrefixes` 會是:

```
directory/directory
```

也許改變 `Delimeter` 成 `i` 可以更好的理解:

```
{ Contents:
   [ { Key: 'directory/' } ],
  CommonPrefixes: [ { Prefix: 'directory/di' }, { Prefix: 'directory/fi' } ],
  Prefix: 'directory',
  Delimiter: 'i' }
```

```
directory/               # key to show
directory/directory/     # group to 'directory/di'
directory/directory/file # group to 'directory/di'
directory/file           # Group to 'directory/fi'
file                     # ignored due to prefix
```

一個使用 Amazon S3 來列出 directory 的好處是你不需要顧慮巢狀的資料夾結構，
所有東西都是扁平化的。所以你可以藉由特定的 `Prefix` 來 `loop` 出你要的資料。


## Directory / Folder

如果你使用 Amazon AWS console 來 `Create Folder`，你可以建立資料夾或是
上傳檔案在該資料夾中。實際上，你使用了下列的 key 建立了兩個物件:

```
directory/
directory/file
```

如果你使用下列指令來上傳檔案，資料夾不會被建立:

```
aws s3 cp file s3://example/directory/file
```

因為，Amazon S3 不是檔案系統，而是 key/value 的儲存空間。如果你使用 `listObjects` 方法，你可以看到一個物件。
同理，你無法複製本地的資料夾：

```
$ aws s3 cp directory s3://example/directory
upload failed: aws/ to s3://example/directory [Errno 21] Is a directory: u'/home/chao/tmp/directory/'
```

但我們可以用 JavaScript SDK 來創建 `directory/folder`:

```
s3.putObject({ Bucket: 'example', Key: 'directory/' }, function (err, data) {
  if (err) { return console.error(err); }
  console.log(data);
});
```

需要筆記的地方是: 你必須使用 `directory/`，結尾必須是斜線。此外，這只是一個檔案而不是資料夾。

