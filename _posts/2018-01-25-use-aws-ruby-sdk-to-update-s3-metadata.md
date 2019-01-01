---
author: Luka
title: "[譯] 使用 AWS Ruby SDK v2 更新 S3 物件 Metadata"
published: true
date: 2018-01-25 15:32
tags:
  - AWS
  - S3
comments: true
---


> From: [Updating S3 Object Metadata With the AWS Ruby SDK v2](https://mattboldt.com/updating-s3-object-metadata-in-ruby/)
Author: Matt
posted at: 2017/5/31

今天我在 S3 就如同在玩火一樣 - 弄壞了一個網站. 我做了研究，徹底的測試了我的程式碼，接著按下了 enter. 之後沒多久，我的心掉落的和我的網站掛掉的速度一樣快。我決定寫下一篇速記來防止同樣的錯誤發生在其他人身上。

## S3 不是資料庫

不可能在 S3 中做到「更新」資料庫 - 在S3並沒有更新資料的方法。這在 Ruby SDK 與 AWS CLI 之中都是成立的。如果你項我一樣在找尋更新整個 Bucket 的物件來更新 metadata (舉例來說: 像是名為 `Cache-Control` 的 headers)，你將會需要使用 `copy_to` 方法。

讓我們開始認證和攫取我們的 bucket。

```rb
require 'aws-sdk'

Aws.config.update({
  region: 'us-east-1',
  credentials: Aws::Credentials.new(<AWS_ACCESS_KEY>, <AWS_SECRET_KEY>)
})
s3 = Aws::S3::Resource.new
bucket = s3.bucket('mattboldt-bucket')
```

現在我們可以透過每一個物件和複製它自己並且帶上一些新的 metadata. 注意我們使用 option `metadata_directive: 'REPLACE'` - 這個將會以新的 metadata *取代*物件原有的 metadata。如果缺少它，我們將無法複製任何新的，而且會得到錯誤訊息如下：

```
This copy request is illegal because it is trying to copy an object to itself without changing the object's metadata, storage class, website redirect location or encryption attributes
```

然而，取代 metadata 將會取代其它屬於這個物件的所有東西，例如: 權限(permission). 請勿執行以下的代碼。

```
# the WRONG way
bucket.objects.each do |object_summary|
  location = "#{bucket.name}/#{object_summary.key}"
  options = {
    cache_control: 'public, max-age=60',
    metadata_directive: 'REPLACE' # options: 'COPY' or 'REPLACE'
  }
  object_summary.copy_to(location, options)
end
```

這是我所搞砸的。我更新的所有的 S3 物件因為缺少了讀的權限(read permissions)，接著 CDN 不再可以存取這些資料。現在看起來是一個很蠢的錯誤，但當時我對出錯的狀況沒有任何頭緒。

## 更新 / 複製物件並且保留原有的資訊

讓我們再試一次；這次我們確保 request 包含(include)所有物件的欄位。這邊是一個可能的選項清單( list of possible options)，用途是傳送到 `copy_to` 方法。

```rb
COPY_TO_OPTIONS = [:multipart_copy, :content_length, :copy_source_client, :copy_source_region, :acl, :cache_control, :content_disposition, :content_encoding, :content_language, :content_type, :copy_source_if_match, :copy_source_if_modified_since, :copy_source_if_none_match, :copy_source_if_unmodified_since, :expires, :grant_full_control, :grant_read, :grant_read_acp, :grant_write_acp, :metadata, :metadata_directive, :tagging_directive, :server_side_encryption, :storage_class, :website_redirect_location, :sse_customer_algorithm, :sse_customer_key, :sse_customer_key_md5, :ssekms_key_id, :copy_source_sse_customer_algorithm, :copy_source_sse_customer_key, :copy_source_sse_customer_key_md5, :request_payer, :tagging, :use_accelerate_endpoint]
```

用這個 List 武裝之後，我們抓取所有存在的資料並且 merge 到新的 option hash。我只想要加上驗證 (valid) 選項而不是使用 `get` 取得所有資訊，所以我使用 `Array#slice` 來對之前的清單做處理。

也需要注意的是，我使用在下面 `object_summary.get` - 這是因為物件的摘要並不包含 metadata, permission ... 之類的東西。這會造成額外的開銷，但是此時我不確定還有其他任何方法可以達到同樣的目的。

```rb
bucket.objects.each do |object_summary|
  object = object_summary.get
  location = "#{bucket.name}/#{object_summary.key}"

  # Build a new options object
  options = {}

  # Merge in the object's existing properties
  existing_options = object.to_h.slice(*COPY_TO_OPTIONS)
  options.merge!(existing_options)

  # Add our new updates
  # The `acl` option here was very important in my case!
  options.merge!({
    acl: 'public-read', # private, public-read, public-read-write, authenticated-read, aws-exec-read, bucket-owner-read, bucket-owner-full-control
    cache_control: 'public, max-age=60',
    metadata_directive: 'REPLACE'
  })

  # multipart_copy is necessary if the object is 5GB+
  if object.size >= 5_000_000_000
    options.merge!({multipart_copy: true})
  else
    # Only used if multipart_copy is true
    options.delete(:content_length)
  end

  # Execute the copy!
  object_summary.copy_to(location, options)

end
```

如果你的 bucket 的大小很大，這會用到一些時間。然而，你得知道 `copy_to` 方法發出請求至 S3 和不會從你的本地端上傳任何的資料。所以即使你複製到新的位置，你也不會重新上傳檔案。

[這邊](https://gist.githubusercontent.com/mattboldt/6052bac987c16b73563d4d6c56d7509b/raw/d317cde9653592d4553e7665e632937dffb327e8/s3-updater.rb)是完整的程式碼：

```rb
require 'aws-sdk'
require 'active_support'
require 'active_support/core_ext'

# http://docs.aws.amazon.com/sdkforruby/api/Aws/S3/Object.html#copy_to-instance_method
COPY_TO_OPTIONS = [:multipart_copy, :content_length, :copy_source_client, :copy_source_region, :acl, :cache_control, :content_disposition, :content_encoding, :content_language, :content_type, :copy_source_if_match, :copy_source_if_modified_since, :copy_source_if_none_match, :copy_source_if_unmodified_since, :expires, :grant_full_control, :grant_read, :grant_read_acp, :grant_write_acp, :metadata, :metadata_directive, :tagging_directive, :server_side_encryption, :storage_class, :website_redirect_location, :sse_customer_algorithm, :sse_customer_key, :sse_customer_key_md5, :ssekms_key_id, :copy_source_sse_customer_algorithm, :copy_source_sse_customer_key, :copy_source_sse_customer_key_md5, :request_payer, :tagging, :use_accelerate_endpoint]

Aws.config.update({
  region: 'us-east-1',
  credentials: Aws::Credentials.new(AWS_ACCESS_KEY, AWS_SECRET_KEY)
})
s3 = Aws::S3::Resource.new
bucket = s3.bucket('mattboldt-bucket')
objects_count = bucket.objects.count
current_object = 0

bucket.objects.each do |object_summary|

  # Get the object and all its metadata, permissions, etc
  object = object_summary.get
  # Copy to the same location
  location = "#{bucket.name}/#{object_summary.key}"

  # Build a new options object
  options = {}

  # Merge in the object's existing properties, but only keeping valid attributes for the copy_to method
  existing_options = object.to_h.slice(*COPY_TO_OPTIONS)
  options.merge!(existing_options)

  # Add our new updates
  options.merge!({
    acl: 'public-read', # private, public-read, public-read-write, authenticated-read, aws-exec-read, bucket-owner-read, bucket-owner-full-control
    cache_control: 'public, max-age=60',
    metadata_directive: 'REPLACE'
  })

  # multipart_copy is necessary if the object is 5GB+
  if object.size >= 5_000_000_000
    options.merge!({multipart_copy: true})
  else
    # Only used if multipart_copy is true
    options.delete(:content_length)
  end

  begin
    object_summary.copy_to(location, options)
    current_object += 1
    puts "Copied #{current_object} of #{objects_count}"
  rescue => e
    puts "Excption Raised: #{e}"
  end

end
```

## 最後

如果你覺得這對你有幫助, 請 [tweet @atMattb](https://twitter.com/atmattb)。謝謝閱讀。


