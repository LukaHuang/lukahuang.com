---
author: Luka
title: '打造舒適的 Windows 開發體驗 我想開發 JS 該怎麼做?'
published: true
date: 2021-02-12 19:50
comments: true
---

# 打造舒適的 Windows 開發體驗 我想開發 JS 該怎麼做?

![](https://cdn-images-1.medium.com/max/2000/0*Lol8xbGYGXDlCunw)

    目錄：
    1. [打造舒適的 Windows ＋ Mac 雙系統開發環境](https://medium.com/starbugs/%E6%89%93%E9%80%A0%E8%88%92%E9%81%A9%E7%9A%84%E9%9B%99%E7%B3%BB%E7%B5%B1%E9%96%8B%E7%99%BC%E7%92%B0%E5%A2%83-windows-mac-%E9%9B%99%E5%88%80%E6%B5%81-6127ce8583a)u
    2. [打造舒適的 Windows 開發體驗 WSL 是關鍵](https://lukatw.medium.com/wsl-%E5%9C%A8-windows-%E4%B8%8A%E6%89%93%E9%80%A0-linux-%E7%9A%84%E9%96%8B%E7%99%BC%E9%AB%94%E9%A9%97%E7%9A%84%E9%97%9C%E9%8D%B5-86da2ed2e2b2)
    3. 打造舒適的 Windows 開發體驗 我想開發 JS 該怎麼做? << 本篇
    4. (預定) 在 Windows 中該如何使用 Python 開發？
    5. (預定) 在 Windows 中該如何使用 Docker 開發？

## 第一部份 — 輕鬆搭建前端環境

### 一個文字編輯器 + 一個瀏覽器，就可以開始寫程式

如果你剛開始寫 JS，想要做一些小作品，那麼你只需要最簡單的環境，一個編輯器，加上一個瀏覽器，就能夠開始寫囉！

對於初學者來說，環境不需要花太多時間去用，因為初學者對環境的熟悉度還不太足夠，所以很可能會弄很久，然後就覺得，阿怎麼這麼難搞，俺不學了啦！
> # 對於初學者來說，快速搞定環境才是上上策！

### VS Code 文字編輯器的首選

文字編輯器首推 VS Code 全名是 Visual Studio Code。為現在主流的文字編輯器，撰寫 VS Code 的團隊，有移植一些優秀軟體的開發體驗，所以用起來非常的舒適。

舉個例子來說，Sublime 很多套件需要自行安裝，而 VS Code 一開始就幫你裝好了，但是整個軟體需要的資源又不會太多，不至於讓電腦速度下降。跟 IDE 強調什麼功能都要整合在一起相比較之下，好處是輕量、簡單，不會過於複雜。對於入門來說，是一個很好的選項，即使對於有經驗的開發者，也能夠自行選用需要的套件來安裝，強化的開發效率。

話不多說，如果你還沒裝的話[**下載](https://code.visualstudio.com/)**來使用看看吧！

![[https://code.visualstudio.com/](https://code.visualstudio.com/)](https://cdn-images-1.medium.com/max/2404/1*sClvVxciian0gB_vQlPVrg.png)

### Chrome 瀏覽器的首選 😅

現在應該很少人不使用 Chrome 了，Chrome 為 80% 以上的使用者選擇使用的瀏覽器，Chrome 開發者工具提供了非常優秀的軟體除錯功能與效能調校功能。下圖為黑暗佈景主題的 Chrome 開發者工具

windows 使用者可以按下快捷鍵 Ctrl + shift + i 叫出 Chrome 開發者工具。而 mac 使用者則是按下 cmd+option+i 叫出 Chrome 開發者工具。

![](https://cdn-images-1.medium.com/max/2872/1*FHH8BDea85aIT9aSETnjzA.png)

除此之外我會推薦幾個方便開發的套件讓初學者安裝，例如：[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)，可以讓你開發的靜態網頁不必手動重整即可顯示在瀏覽器。

![[https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)](https://cdn-images-1.medium.com/max/2000/0*9_0jJlJAH9egW7aC.gif)

第二個是 [Beatify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)，讓你的程式碼快速的恢復整齊。

![Luka’s computer](https://cdn-images-1.medium.com/max/2532/1*wp9Dm0MW884PX6VynTeNBg.gif)

## 第二部份 — Node.js 開發環境

### 推薦初學者的安裝方式

Node.js 最簡單的安裝方法就是去官方網站下載。那麼安裝之後，便可以在 powershell 中使用。一樣，初學者推薦使用最簡單的安裝方法。就選這種吧！官方網站連結附上：[https://nodejs.org/en/](https://nodejs.org/en/)

![[https://nodejs.org/en/](https://nodejs.org/en/)](https://cdn-images-1.medium.com/max/2000/1*iyMi2pP6iJe2TMMFxcbTdA.png)

### 如果你是一個專業的開發者，可以這樣做

使用 nvm 來管理 node.js 的版本，例如：你有多個 node.js 的專案，每個專案的 node.js 的版本不盡相同，那麼你就需要一套「管理 node.js 版本」的工具，這個工具就是 nvm。

NVM 全名 node.js version management，就是 Node.js 的版本控制系統，可以讓我們進入不同專案時，使用不同的 node.js 的版本，讓套件的相依問題降低至最低。

那麼 Windows 揪竟要怎麼裝 nvm 呢？來用用看 [nvm-windows ](https://github.com/coreybutler/nvm-windows)吧！，這是一個可以在 Windows 中安裝 nvm 的工具的開源專案，已經有 14000 顆星星以上，非常的值得信賴。

![](https://cdn-images-1.medium.com/max/2000/1*ASJ1a5t6kdXL83n_r5XAAw.png)

## 第三部分 — Linux /Mac 使用者的開發環境

我覺得最一勞永逸的開發環境，還是來用 Linux 吧！而在 Windows 上可以使用 Linux 的方式，就是安裝 WSL 囉。詳細可以看我之前寫的文章，如何安裝 WSL，與 WSL 是什麼？
[**打造舒適的 Windows 開發體驗 WSL 是關鍵**
lukatw.medium.com](https://lukatw.medium.com/wsl-%E5%9C%A8-windows-%E4%B8%8A%E6%89%93%E9%80%A0-linux-%E7%9A%84%E9%96%8B%E7%99%BC%E9%AB%94%E9%A9%97%E7%9A%84%E9%97%9C%E9%8D%B5-86da2ed2e2b2)

WSL2 是 Windows 上最貼近 Linux 的開發體驗的解決方案。所以我自己的開發環境會圍繞著 WSL 來構建。

目前輕量開發一些 JS 的專案和安裝一些軟體是很順暢的，如果你本來是 Linux / Mac 的開發者，想要嘗試換換 Windows 作為開發機，可以考慮以這個方案來延伸。這樣的話踩雷程度應該是比較低的。

## 小結

目前嘗試 windows 到現在，就是切換畫面，還有一些小地方不太順。至於以前雷到爆炸的底層問題不敢說沒有，但已經舒緩了不少，WSL2 出來後應該有 70% 以上的改善，所以我認為 Windows 可以作為一個主要的開發環境是沒有問題的。
