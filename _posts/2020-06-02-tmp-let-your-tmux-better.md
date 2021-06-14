## tpm — 套件管理工具 ，讓你的 tmux 更好用

最近因為工作上需要用到開很多個視窗的情景，研究了一下如何把 tmux 變得更具有生產力。

![](https://cdn-images-1.medium.com/max/2000/0*wJrJdR3tFO84Tdsd.jpg)

## tmux 是什麼？

[tmux](https://github.com/tmux/tmux) 是一個很好用的遠端 session 管理套件，兼具效能與功能性，可以讓你在遠端伺服器中，輕易管理背景執行程式。

Larry 在 **[終端機 session 管理神器 — tmux](https://larrylu.blog/tmux-33a24e595fbc) **文章中介紹了基本的概念、使用方式與經典的使用情景。如果沒有看過的話，請看文章了解一下。
[**終端機 session 管理神器 — tmux**
*身為一名開發者對終端機應該不陌生，不管是要執行腳本、ssh 到遠端伺服器都會用到終端機。
這邊要介紹給大家一個工具 tmux，tmux 是個 terminal multiplexer，可以讓你的終端機更好用*larrylu.blog](https://larrylu.blog/tmux-33a24e595fbc)[t](https://larrylu.blog/tmux-33a24e595fbc)

不過其實不看也沒什麼關係啦，看我寫得就好*。*

## Hello, tpm

[tpm](https://github.com/tmux-plugins/tpm) 是 tmux 的套件管理工具，英文是 Tmux Plugin Manager。tmux 之於 tpm 就如同是 nodejs 之於 npm。是一個在 github 上面有 6100 顆星星的開源專案。

今天我的重點放在 tpm 的介紹上，如果還沒安裝 tmux，請按照 **[終端機 session 管理神器 — tmux](https://larrylu.blog/tmux-33a24e595fbc) **文章中的教學逐步安裝並學習使用方法。

回過頭來，我們想要用 tpm 來安裝一些好用的套件，先安裝好 tpm。 首先 git clone tpm 至本機。

    git clone [https://github.com/tmux-plugins/tpm](https://github.com/tmux-plugins/tpm) ~/.tmux/plugins/tpm

接著修改 ~/.tmux.conf 檔案的內容，將下列內容複製貼上至檔案中。

    # List of plugins
    set -g @plugin 'tmux-plugins/tpm'
    set -g @plugin 'tmux-plugins/tmux-sensible'

    # Other examples:
    # set -g @plugin 'github_username/plugin_name'
    # set -g @plugin 'git@github.com/user/plugin'
    # set -g @plugin 'git@bitbucket.com/user/plugin'

    # Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)
    run -b '~/.tmux/plugins/tpm/tpm'

安裝完成後在終端機中輸入下列指令或是重開終端機即可載入完成。

    tmux source ~/.tmux.conf

## 要怎麼使用 tpm 安裝 tmux 套件

安裝 tpm 套件可能跟你想的不太一樣，直接修改 ~/.tmux.conf 檔案的內容，並且重啟。例如你想要安裝 [tmux-copycat](https://github.com/tmux-plugins/tmux-copycat)。

    vim ~/.tmux.conf

加入這一行

    set -g @plugin 'tmux-plugins/tmux-copycat'

接著，重開 tmux session 或是在 tmux 中輸入 prefix (ctrl+b) + I 即可。

## ctrl+b 有點遠，修改 prefix 為 ctrl + a

tmux 大部分的指令是由組合鍵 prefix + 某某鍵所構成。 prefix 預設是 ctrl + b，外國鄉民大多是將 prefix 修改成 ctrl + a ，你也可以設成你喜歡的樣子，設定方法很簡單。在 .tmux.conf 中加上以下內容即可將 prefix 變成ctrl + a。

    # remap prefix from 'C-b' to 'C-a'
    unbind C-b
    set-option -g prefix C-a
    bind-key C-a send-prefix

## 介紹幾個好用的套件

### [tmux-yank](https://github.com/tmux-plugins/tmux-yank)

讓你的 tmux 可以用系統的剪貼簿，支援 osx, linux, WSL(Windows Subsystem for Linux) … 等等的環境。

### [tmux-pain-control](https://github.com/tmux-plugins/tmux-pain-control)

這個套件有三大功能，第一是切割視窗，第二是在視窗中跳躍，第三是縮放視窗大小。

### 讓切割視窗變得更加簡單

這兩個是 tmux 預設的切割視窗快捷鍵

 1. prefix + "：進行**水平**分割

 2. prefix + %：進行**垂直**分割

這兩個符號我一直記不起來😭，但是在使用[tmux-pain-control](https://github.com/tmux-plugins/tmux-pain-control) 之後：

 1. prefix + |：進行**水平**分割

 2. prefix + -：進行**垂直**分割

圖型記憶法，真是太好記了。連續技用起來會有這樣的效果：

![](https://cdn-images-1.medium.com/max/2000/1*P3MQZDaihxlpHZwBNTvdpQ.gif)

### 用 vim 的方向鍵跳轉視窗

 1. prefix + h：往左跳

 2. prefix + j：往上跳

 3. prefix + k：往下跳

 4. prefix + l：往右跳

![](https://cdn-images-1.medium.com/max/2000/1*F-mk4CsL1oh36EDK_cRr0g.gif)

### 用 vim 的方向鍵縮放視窗

 1. prefix + shift + h：視窗邊界往左移

 2. prefix + shift + j：視窗邊界往上移

 3. prefix + shift + k：視窗邊界往下移

 4. prefix + shift + l：視窗邊界往右移

![](https://cdn-images-1.medium.com/max/2000/1*lv0mJUFUVHmxCZMPuctZRg.gif)

### [tmux copycat](https://github.com/tmux-plugins/tmux-copycat)

tmux copycat 可以讓你不使用滑鼠就能夠複製文字。這個套件非常好用，礙於時間不夠無法錄製完整操作。殘念。

### [tmux-resurrect](https://github.com/tmux-plugins/tmux-resurrect)

讓系統重啟的時候保持 tmux 的設定。

### [tmux-open](https://github.com/tmux-plugins/tmux-open)

能夠讓你快速的打開你選取到的文字對應的超連結或是檔案。

### [tmux-prefix-highlight](https://github.com/tmux-plugins/tmux-prefix-highlight)

讓你知道你有沒有成功觸發 prefix，如果按成功了，在下方顯示列會有成功觸發的圖案。

### [tmux-continuum](https://github.com/tmux-plugins/tmux-continuum)

持續幫你儲存 tmux 的設定。

### [tmux-sensible](https://github.com/tmux-plugins/tmux-sensible)

讓 tmux 比較合乎邏輯，不然 tmux 有些預設的設定實在是有點難用，這是必備的 tmux 套件。

## 小結

有了 tpm 可以輕鬆安裝好用套件，這讓 tmux 平易進人多了，操作上不再需要記憶太多奇怪的快捷鍵。就可以讓生產力獲得大幅的提升，真滴好。

## 參考資源

- [Making tmux Pretty and Usable — A Guide to Customizing your tmux.conf](https://www.hamvocke.com/blog/a-guide-to-customizing-your-tmux-conf/)

- [A minimalist guide to tmux](https://medium.com/actualize-network/a-minimalist-guide-to-tmux-13675fb160fa)
