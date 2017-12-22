---
author: StevenTTuD
title: "Web 基本功 - Cookie 與 Session"
published: true
date: 2017-12-22 14:11
tags:
  - Web Foundation
  - Coockie
  - Session
comments: true
---

## Cookie

### 1.1 什麼是 Cookie ?

Cookie 在使用者第一次進入網站的時候產生。Browser 記錄一些隱私性較低的資料。
例如: 使用者第一次進入網站的時候會跳出教學視窗。當使用者點擊[關閉]後，Cookie
內記錄使用者已經看過教學了。使用者在下次登入的時候因為 Cookie 內記錄著使用者
已經看過教學，所以就不會跳出教學視窗。

### 1.2 Cookie 的特性

- 每個網站的 Cookie 是分開的, 例如: www.google.com 無法取得 www.yahoo.com 的 cookie。
- 能夠設定失效的時間。比如說過一段時間你就需要重新登入，就是由設定 Cookie Expired Time 來完成。有時候為了方便，也可能將 Cookie 設定為永久不失效。

### 1.3 Server 端如何讓 Browser 儲存 Cookie

1. Client 請求 Server 給予頁面
1. Server 回 Response 給 Browser 的時候，HTTP Header 帶上 `Set-Cookie`。Browser 接收到 Set-Cookie 指令時，會將 Cookie 的名稱和值儲存在 Browser 的 Cookie。

![](https://lh3.googleusercontent.com/-ivTQRwbrQzs/WjyiAfiRepI/AAAAAAAAK7Y/8pjRBORXGEIKxyP7bjFTiEHjPYroooXQwCHMYCw/I/15139142578413.jpg)

### 1.4 Browser 在每次 Request 的時候會帶上 Cookie

Browser 在每次對 Server 發出 Request 的時候會帶上 `Cookie` 的 Header，讓 Server 能夠正確的存取當前 Cookie。

![](https://lh3.googleusercontent.com/-316qWgn_JFg/WjyiAwnYu4I/AAAAAAAAK7c/jUqct0G-OeIYDDq5DxyM_rR1azOAClRnwCHMYCw/I/15139133853587.jpg)


## Session

### 2.1 什麼是 Session

Session 就像你進入一個遊樂園，手上先蓋個章，下次進入的時候就知道你是誰。
遊樂園就好比是 Server，你就好比是 Client (Browser)。
Client 要怎麼儲存這個章呢? 有兩種方法:

1. 使用 Cookie (set cookie)
1. 使用 html 儲存，例如: hidden input。

拿章去 Server 換資料也有兩種方法:

1. 使用 Cookie
2. Query string/POST

因為實作上的方便程度與效能考量，大部分的網站採用 Cookie 來完成 Session 的實作。


### 2.2 Cookie-based Session 與 Session Storage

Cookie-based Session 指的 Session 儲存的方式不同，而不是拿章去 Server 換資料的時候有沒有使用 Cookie。

常見的 Session Storage 有這幾種:

1. Database
2. Memcached
3. Cookie

### 2.3 比較 Cookie-based Session 與 Memcached Store Session

來比較一下這兩者的優缺點。 Cookie-based Session 的優點:

- 對伺服器的效能負擔很低
- 方便使用

缺點:

- 大小最多存4Kb。
- 資料存放在瀏覽器上如果 `config/secrets.yml` 外流可能存在被破解的風險 (詳見 [Rails CookieStore 的安全議題](http://tech.shaolin.tw/posts/2013/12/17/security-issue-of-rails-cookiestore-mechanism/))。

Memcached Store Session 的優點:

1. memcached 使用記憶體來儲存，讀取速度快。
2. 可以實現集中式管理。
3. 不會受到 cookie 4kb 大小的限制。

缺點：

1. 儲存方式用記憶體，持久化有疑慮。
2. 在追求高性能高併發的情景下，cookies 的表現更好，因此很多大網站採用 cookies 作為 session store.


### 2.4 Session 傳值

Session 傳值指的是利用 Session 儲存資料的機制，讓不同頁面間可以互相傳遞資料。

1. 使用 Query String 或是 POST 把資料往 Server 傳
2. Server 將收到的資料存到 Session 中。
3. 在不同頁面的時候因為你的章是同一個，可以讀取 Session 中儲存的資料也是同一份，達到傳值的目的。


## Rails 中的 Cookie-based Session 安全性問題

Rails 3 以前 cookie-based session 如果不特別設定，可以輕易的被解開:

```rb
require 'base64'
session_cookie = 'your session cookie'
Marshal.load(Base64.decode64(sesson_cookie.split('--').first))
```

解開後會像這個樣子

```rb
{
        "session_id" => "3223668cb4b04296c006e190ce2b1a17",
    "user_return_to" => "/",
             "flash" => #<ActionDispatch::Flash::FlashHash:0x007f80d1090250 @used=#<Set: {:alert}>, @closed=false, @flashes={:alert=>"You need to sign in or sign up before continuing.", :warning=>nil, :error=>nil, :notice=>nil}, @now=nil>,
       "_csrf_token" => "BxX8rLulhq2v2YSKrLxIIkYeV4IYNTNceT2ib1BrO08="
}
```

Rails 4 以後的 Cookie-based Session 會經過 Secret 加密。好好保護你的 `config/secret.yml` 能夠讓 Session 中的隱密資料不會被解開，從下面 code 可以看出要解開的話需要不少的麻煩:

```rb
require 'rubygems'
require 'cgi'
require 'active_support'

def decrypt_session_cookie(cookie, key)
  cookie = CGI::unescape(cookie)

  # Default values for Rails 4 apps
  key_iter_num = 1000
  key_size     = 64
  salt         = "encrypted cookie"
  signed_salt  = "signed encrypted cookie"

  key_generator = ActiveSupport::KeyGenerator.new(key, iterations: key_iter_num)
  secret = key_generator.generate_key(salt)
  sign_secret = key_generator.generate_key(signed_salt)

  encryptor = ActiveSupport::MessageEncryptor.new(secret, sign_secret)
  puts encryptor.decrypt_and_verify(cookie)
end


# Time to test ... (With data from Arbeit327)
cookie = 'WVFQVTFtbmNxWWJPODZNb3NUMVZzZGtDVjZQNXpMYStFMWdiZlJPMkdjRFRBOGZ5T3pOTzBPKzk3NWxvQUJvTlRRU2t4MXZmdG8rT0I0R2M3Ulh0YXpxRVhNMll5UW1xUHhvVXBLbXozZ3ZyNjB4VDU4dWRIUkxBWjBXbDJhci93YkYrZWswUHdFL0hUNDJaUHo2cEpxbXFvdlFZMjJWVU9KTWhHb3NyalFwTkphd0pUQVZSTXRHbkVqRlFnSGpNVTNFQlVxYlRmT3pWbXNjK0JuQ3FydzQvODRhbmtuU29haGNRbXQ4T3o1ZjhqMk53WTRMa0pVd1hPb2NHTVFQY3dvanE2ZElqUk1Mc21HS0k2SHVuZEZ3OWhjdzZPQnRSMEdVVkQwL2IxSVh5QzNSWVlJZms5c1JJV0lzUE1Zb1NHbEtqYm5nTGRKd1ZSdGpOQ1RZZWthR1A2anRFMEluaTcyWTNaNHJBR1N0dklzMkg1RjVmVmY4azEzV3o0N2Z2LS1wQlowRUZ6cjI3SVFQU0F5bGlYSDNnPT0%3D--19650cc5c3e2599fb43b7235ab4de5a1ce8a46ac'
key = 'aeb977de013ade650b97e0aa5246813591104017871a7753fe186e9634c9129b367306606878985c759ca4fddd17d955207011bb855ef01ed414398b4ac8317b'

decrypt_session_cookie(cookie, key)
```


## references

[介紹 Session 及 Cookie 兩者的差別說明](http://blog.hellojcc.tw/2016/01/12/introduce-session-and-cookie/)

[FRED - Web 技術中的 Session 是什麼？](http://fred-zone.blogspot.tw/2014/01/web-session.html)

[Rails CookieStore 的安全議題 - Shaolin.TW](http://tech.shaolin.tw/posts/2013/12/17/security-issue-of-rails-cookiestore-mechanism/)

[The Will Will Web - 解釋 Cookie 的特性](https://blog.miniasp.com/post/2008/02/22/Explain-HTTP-Cookie-in-Detail.aspx)

[A simple script to decode Rails 4 session cookies](https://gist.github.com/profh/e36e5dd0bec124fef04c)




