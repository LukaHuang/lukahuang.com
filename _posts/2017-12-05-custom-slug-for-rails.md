---
author: StevenTTuD

title: "Rails Slug 問題整理"
published: true
date: 2017-12-05 21:34
tags:
  - Rails
comments: true
---

## problem and solutions

這邊記錄一下 slug 相關的問題與解法:

- resources 的 slug 可以在 route 加入 `param: :slug` 解決
- 但是如果是 member 的話, `param: :slug` 可能會失效,所以需要自幹 path helper 並且把 `params[:id]` 當做 slug 來使用。
- 如果允許的話用一下 friendly_id 來做會比較簡潔。
- 中文 slug 需要配合 babosa 來解決


## referneces

[Custom slugs for Rails URLs done right – Hacker Noon](https://hackernoon.com/using-custom-slugs-for-rails-urls-500eb3f58f3c)
[處理rails中文slug | 魔法師的手杖](https://sibevin.github.io/posts/2015-01-13-092638-rails-handle-chinese-slug#bb6d5b76edfeaa54f3f18ad430a53ffb)