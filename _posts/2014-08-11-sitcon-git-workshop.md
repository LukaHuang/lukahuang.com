---
title: 'Sitcon workshop：Git 入門到進階與實務經驗談'
date: 2014-08-11 01:54
comments: true
categories:
tags:
  - Git
---

# Git 入門到進階與實務經驗談

[workshop網頁](http://sitcon.kktix.cc/events/sitcon-workshop-2014)
sitcon這次舉辦的為期五天的workshop
每天不一樣的主題，我參加的有

1. 8/11 Git 入門到進階與實務經驗談
2. 8/14 那些學校沒教的黑魔法攻防
3. 8/15 學習設計：從一個網站的設計開始

這是第一天 Git workshop 的學習筆記
主講人:Denny
投影片: [連結](http://denny0223.github.io/SITCON-workshop-2014-git/)

## 第零部分：前置設定

### 1. 讓你的termenal可以顯示出精美的彩色branch樹狀圖

```
git config --global alias.lg "log --color --graph --all --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --"
```
這些設定會存在.gitconfig ，因為指令加上--global，會加到user的設定上，而不是rep。
設定完成後以後輸入```git lg```就會顯示樹狀圖與commit詳細資訊。

```
git lg
```
將commit再終端機中顯示成樹狀圖。


### 2. 在terminal顯示branch名稱
```
function parse_git_branch {
   git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e 's/ (.)/(\1)/'
}

export PS1="\h:\W \u\$(parse_git_branch)$ "
```
將以上代碼貼到.bashrc profile，

## 第一部分：git基本操作

```
ls -al
```

顯示資料夾內的隱藏檔案。

### 認識git儲存的結構
![](https://lh6.googleusercontent.com/-QXaRQdFQ51U/U-gsMJNN7xI/AAAAAAAACt8/gl7wpuNUmBI/w1916-h1146-no/Screen%2BShot%2B2014-08-11%2Bat%2B10.23.51.png)

working space是你的工作目錄
staging area 代表這些檔案等著進rep
repository則是儲存庫

### 牛刀小試

```
git add
```
輸入```git add``` . 將檔案抓進staging area。

```
git reset
```
輸入```git reset```，將staging area把檔案拿出來。

```
git status
```
輸入```git status```可以查看目前的狀態。
untracked files內的資料代表在staging area的檔案。

### gitingnore與gitkeep

#### 1.使用gitignore來設定不需要版本控制的檔案

```
.gitignore
```

像binary這種佔空間且無法比較，就不存放在rep裡。

#### 2.使用gitkeep將資料夾加進版本控制之中

```
.gitkeep
```

建造一個空資料夾時，git並不會把它直接加進版本控制中，而加入gitkeep後讓這個新的資料夾加入版本控制中。

### 使用git diff來檢查差異

```
git diff
```
可以看到目前版本與前一個版本的差異

```
git diff --cached
```

可以看到rep和staging area的差異

### git commit與patch commit

```
git commit
```

除了第一行外，其他部分可以寫詳細的演算法、作法，可以使用git log來看完整的內容。(git status只看的到第一行)

```
git commit -m "commit message"
```
當commit不需太多說明時，使用單行的commit可以使用此指令。

```
git add --patch
```
[youtube - Intro to git add patch mode tutorial](https://www.youtube.com/watch?v=Wl0NfWYrvlY)

```
git commit --patch
```
對某幾行commit而非整個檔案。

```
git commit -a
```
跳過staging area從work directory直接丟進rep。

### 使用 git show 顯示 commit 資訊
```
git show = git show HEAD
```
HEAD表示最新的一筆，所以git show就是顯示最新的一個commit。

```
git show HEAD^
```

表示HEAD的前一筆


### 認識git rm

git rm不只能夠刪除檔案還能夠取消追蹤檔案。

```
git rm <file>
```

Remove file

```
git rm --cached <file>
```
Untrack file


### 認識 git checkout

git checkout HEAD^
HEAD變成前一筆。

```
git checkout master
```

返回最新版

```
git checkout <reversion> <file>
```
把以前版本的單一檔案拿回來。

### 認識git stash

```
git stash
```
把工作區原封不動的保存起來（本地沒有變動的時候會不給暫存）。

```
git stash list
```
看到目前暫存的東西

```
git stash pop
```
把暫存的東西拿出來

```
git stash show stash@{0}
```
顯示修改後的檔案

```
git stash show -p stash@{0}
```
顯示修改後的檔案內容

```
git stash drop
```
把暫存區的東西刪掉

### 認識git reset

```
git reset HEAD^
```

刪掉一筆commit，但會保留目前檔案的內容。

```
git reset HEAD^ --hard
```

刪掉一筆commit，連檔案內容都刪掉。

### 認識git revert

```
git revert
```

將別人所做的commit取消，讓revert的東西存在commit之中。

## 第二部分：推上遠端rep(Github)

```
git push origin master
```
本地會跟著名稱相同的遠端rep

```
git push origin -u master
```
讓本機知道要跟著origin這條，以後只要打git push就可以推上去。這個路徑檔寫入在.git/config裡面。

```
git branch -avv
```
看所有的-a -avv看更詳細

```
git remote
```
可以看到目前有的分支

```
git remote -v
```

可以看到目前分支的詳細資訊

```
git remote show
```

### Cache https password
使用cache記錄帳號密碼，可以設定可維持的時間。

```
git config --global credential.helper cache
git config --global credential.helper "cache --timeout=3600"
```

### ssh小概念
id_rsa.pub 公鑰 - 可以發給網路上的人
id_rsa 私鑰 - 絕對不可以流出去

### 本機不知道該跟哪條branch的時候
使用XXX可以修改指令。

### 練習：解決衝突
先來製造點衝突
開兩個terminal 分別是原來是repo與用git clone回來的repo
接下來各下一個新的commit，修改同一檔案。
並且push上遠端。
第二個修改的commit需要先使用git pull把新版本拉回來，解決完衝突才能繼續push。
(git pull = git fetch + git merge)

## 第三部分：初探branch

branch的用法很廣泛，一般來說分為三種主要的branch。不同branch的東西是不會互相污染的。

developer branch - 主要人員都在developer branch上開發。
release branch - 穩定版本
feature branch - 開發新功能

### git pull 與 git pull --rebase 的差異

```
git pull
```

merge 完的 branch 會顯示分支

```
git pull --rebase
```

merge 完的branch不會顯示不必要的分支。（因為本來就是同一個branch）

更詳細的介紹請參照

[使用 git rebase 避免無謂的 merge](http://ihower.tw/blog/archives/3843)

### Create a branch

```
git branch <branch name>
git checkout -b <branch name>
```
直接跳過去dev順便創造。

### 查詢branch的資訊

```
git branch -a
git branch -v
git branch -vv
git branch -avv
```

顯示的資訊最詳細，所以用這個就好

### 把branch推上遠端rep

```
git push origin dev
```
把dev推上去

### 把dev merge回master
git merge dev

### Fast forward

1. 當master未新增東西時，branch有新東西。這時會發生fast forward現象。也就是branch直接接回master。
2. 想保持branch的資訊依然存在，這時可以使用

```
git merge --no-ff
```

### 刪除一個branch

```
branch -D
```

把branch砍掉。

### 使用cherry-pick

```
git cherry-pick <reversion>
```

把某一個branch的其中一個commit拿過來用。


## 第四部分：其他常用指令

### Modify commit history

```
git commit --amend
```

修改commit message，commit時會產生的commit id，建議只有在還沒推到server的時候做。

```
git commit --amend --date="Mar 15 00:00 2014"
```

修改commit的時間

```
git rebase -i <reversion>
```

### 用 git relog 把 git reset --hard 的東西救回來

1. git reflog
2. git reset --hard 要切回的分支id

### More about git log

```
git log -p --stat
git log --oneline
git log --graph
git log --abbrev-commit
git log --pretty=%an
git whatchanged
git log --author="Denny Huang"
```

查詢某人對專案的貢獻

```
git log --since={2014-07-01} --until="1 week ago"
```

查詢時間內的log

### search by regex

```
git log -p -i -G 'regex'
```

### 想知道誰動了哪一行

```
git blame <filepath>
```

## 延伸閱讀

[Git-rebase 小筆記](http://blog.yorkxin.org/posts/2011/07/29/git-rebase)