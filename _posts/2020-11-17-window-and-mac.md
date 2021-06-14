
## 打造舒適的雙系統開發環境 Windows + Mac 雙刀流

![](https://cdn-images-1.medium.com/max/12000/1*MZeXxIBLIPYUzjspxDDSsg.jpeg)

    目錄：
    1. 打造舒適的 Windows ＋ Mac 雙系統開發環境 << 本篇
    2. [在 Windows 上打造 Linux 的開發體驗 WSL 是關鍵](https://medium.com/starbugs/%E6%89%93%E9%80%A0%E8%88%92%E9%81%A9%E7%9A%84-windows-%E9%96%8B%E7%99%BC%E7%92%B0%E5%A2%83-terminal-%E7%B5%82%E7%AB%AF%E6%A9%9F%E8%88%87-wsl-76d9abdd7fae) 
    3. (預定) 在 Windows 中該如何使用 Node.js 開發？
    4. (預定) 在 Windows 中該如何使用 Python 開發？
    5. (預定) 在 Windows 中該如何使用 Docker 開發？

以前我剛學程式的時候，很多人建議我直接用 Mac 或是 Linux，而我最後也選擇了 Mac。直到近幾年，大家紛紛說 Windows 已經跟以前有很大的不同，許多人也開始推薦起 Windows 做為開發環境。

而我在進行「饅頭計畫」的教學中，也有許多學生需要使用 Windows 作為開發環境，因此，我想要來試試看，Windows 是否還是像以前那麼雷。

我們就一起開始探險吧！

![](https://cdn-images-1.medium.com/max/9564/1*5cgID8p09S7lFMvDY0YQNA.jpeg)

## 當我踏出了第一步，就前進了一步

第一步，需要一台 Windows 電腦，這很重要！沒有 Windows 電腦怎麼用 Windows 開發呢？那麼有幾個選擇，在 Mac 裡面灌 Windows 雙系統，或是再買一台桌機獨立使用。

### 好雙系統，不用嗎

![雙系統示意圖](https://cdn-images-1.medium.com/max/3150/1*qccjQQvYyu-EmqbPZl0NoA.png)

一台電腦雙系統優點是帶著一台電腦，就可以享受兩個系統的優點，但是一台筆電就那麼小，即使裝了 Parallel desktop，我覺得使用起來記憶體的限制和硬碟限制非常讓我不舒適。所以我在好幾年前就拋棄了這種使用方法。

所以回到原標題，好雙系統，不用嗎？謝謝再聯絡。

### 嘿嘿嘿，買兩台電腦，就不怕吃資源了吧？

![](https://cdn-images-1.medium.com/max/2000/0*LNzUPuND5WMlkE1Z)

一台電腦不夠，買兩台總行了吧？加購一台 Windows 電腦，切換著用。需要的時候再換一臺電腦。

![](https://cdn-images-1.medium.com/max/2752/1*z_n_sxe7A41jp1TF2HFEVw.png)

可是瑞凡，兩台電腦需要兩倍的軟體，錄影軟體要買兩套，office 要買兩套，滑鼠鍵盤都是兩套。我的 Windows 只是想要用來開發的，有必要那麼搞剛嗎？

## 有沒有兩拳其美的方案？

沒錯，我沒有打錯字，一拳 Mac 一拳 Windows，兩拳其美。

最後我選擇的方案是，買一台桌機後當成遠端電腦用，雖然擺在房間裡，但是直接遠端過去，除了初次安裝 Windows 以外，只要使用一組鍵盤滑鼠。錄影軟體用原來 Mac 買的就好，也能夠沿襲原有的 Mac 操作習慣。

Mac 工作模式：一台 macbook 加上一台外接螢幕

![](https://cdn-images-1.medium.com/max/2000/1*CHn1wjDFOBlsHhNFcKbbpQ.png)

Mac + Windows 工作模式

![](https://cdn-images-1.medium.com/max/2332/1*fPpbvFo0jWMg3MBCA2fQ3A.png)

這樣就可以在需要的時候隨時 Remote 過去 Windows 的電腦。為什麼要這樣做呢？因為我不能忍受電腦卡頓，這樣所擁有的資源是：

Macbook Pro: 16GB ram + 512GB SSD 
Windows 桌機：8GB Ram + 256 GB SSD + 1T 硬碟

因為 Windows 用來做簡單的開發，主力剪影片轉檔或是跑比較重的工作還是用 Macbook Pro，搭配起來我覺得簡直絕配。

總花費也不會太高，這樣規格的 i5 Windows 桌機，只要 15k，CP 值頗高。

## 剩下的問題，網路是否有延遲？

這樣的開發環境，從 Macbook 遠端過去 Windows 是否會延遲？因為我的 Windows 擺在房間裡面，並且我選用了一款「支援區域網路連線」的遠端桌面軟體，幾乎感受不到延遲，簡直跟裝在同一台電腦裡面沒兩樣。

![](https://cdn-images-1.medium.com/max/2000/0*vbIi2ZDd0YF0ObcD)

### Windows 桌機我買哪一款呢？

隨便挑了一款 D 開頭的品牌機，品牌機的特色就是可以請「維修人員到府幫你修電腦」，我實在懶得比來比去，什麼顯卡 CP 值比較高，之類的比較。通常這種電腦設備過幾個月就過時了。

所以我選擇懶人中的懶人買的品牌機，到府維修三年保固，有問題直接請人到府維修，連搬去光華商場都不用。

## 心得

這樣就讓我踏出了打造舒適的 Windows 開發環境的第一步，也完成了「兩拳其美」的狀態，我想要用哪個系統，都有足夠的硬體支援與軟體可以使用。雙系統的部分搞定了，接下來下一篇來介紹 Windows 開發環境的安裝。

如果覺得我的文章寫得不錯，請不吝按下訂閱，我會寫更多這種奇葩的文章。如果覺得的文章寫的很差，用拍手打醒我，謝謝你的閱讀！

 <iframe src="https://medium.com/media/5576784b41ba86407c971df241be30cb" frameborder=0></iframe>
