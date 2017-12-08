---
author: StevenTTuD

title: "使用 GIT Precommit hooks 防止 Binding.pry 進入 Commit"
published: true
date: 2017-12-06 22:34
tags:
  - Rails
  - Time
comments: true
---

## Problem

如果不小心把 `binding.pry` commit 進 git 而且不幸的 push 的話, 勢必要使用另一個 commit 來修正。如果要讓這個 commit 不見可能就需要用 `git push -f` 來修改。這樣做很醜，不優雅。根治的方法是 - `根本不應該將 debug code 進入 commit` 。但是人總是會有不小心的時候。最近發現一個工具可以做到這件事情: GIT Precommit hooks。

## What is GIT Precommit hooks?

GIT Precommit hooks 是一種可以在你每次 Commit 之前的 Callback。每次 Commit 前都會執行。我們利用這個特性，可以用來檢查，防止如 `Binding.pry` 的 Debug Code    進入 Git 中。

## Solution 1 - Use Script

在你的 git 專案底下，`.git/hooks/pre-commit.sample` 這是 Precommit hook 編寫的範本。將 `.sample` 結尾去除掉，就可以真正作用在當前的 Git 專案目錄上。不過因為我們想作用的是在 Rails 專案上，所以需要客製化腳本。

這邊已經有寫好的腳本: [Source Code](https://raw.githubusercontent.com/StevenTTuD/githooks/master/pre-commit)

### 1.1 How to Use

切換到專案底下

```
cd project_name
```

下載腳本

```
curl https://raw.githubusercontent.com/StevenTTuD/githooks/master/pre-commit > .git/hooks/pre-commit
```

讓腳本擁有執行的權限

```
chmod +x .git/hooks/pre-commit
```

做完這些已經具有自動檢查的功能了

### 1.2 Demo

```
git commit -m "hello world"
File: app/views/company/jobs/new.html.slim:9
9:binding.pry

There are some occurrences of console.log|debugger|binding.pry at your modification.
Are you sure want to continue? (y/n)
```

looks great!

### 1.3 reference

[GIT Precommit hooks Basics : Block debug command from commit](https://cbabhusal.wordpress.com/2014/10/21/ruby-on-rails-githooks-basics/)




## Solution 2 - Use Gem

如果嫌上述方法麻煩，不好管理。也可以考慮使用 Gem 來管理 Precommit Hook
`Gem 'pre-commit'` 可以做到這件事情。把 `pre-commit` 加入你的開發環境。

### Usage

```rb
group :development do
  gem "pre-commit", require: false
end
```

接著輸入 bundle 更新 Gem Set

```
bundle
```

設定需要的 check

```
git config pre-commit.checks "[pry, debugger,yaml]"
```

要取消某個設定

```
git config pre-commit.checks "[pry, debugger]"
```

可檢查的項目可到 github 查詢

[jish/pre-commit: A slightly improved pre-commit hook for git](https://github.com/jish/pre-commit)







