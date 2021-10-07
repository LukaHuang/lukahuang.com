---
author: Luka
title: 'ArgoCD - 透過 ArgoCD 認識 GitOps'
published: true
date: 2020-09-21 20:50
comments: true
tags: 
  - Kubernetes
---

# ArgoCD — 透過 ArgoCD 認識 GitOps

![](https://cdn-images-1.medium.com/max/2000/1*4Ggl4UF7SjZk4qoapcDBnA.jpeg)

### 什麼是 GitOps ?

兩年前初次聽到 GitOps 的時候，我想說是不是只要 Git tag 觸發一些部屬相關的事情，像是下了某個 tag，就會觸發某 Ansible 的工作，部屬某一台伺服器。很遺憾，完全不是我想的那樣。

在最近實際將 GitOps 整合進開發流程的過程中，深入研究了一下 GitOps。對 GitOps 有了多一點的了解，趁這個機會來跟大家分享一下。

GitOps 是 Weaveworks 提出的一種持續交付(CD)的概念，透過 Git 來聲明基礎設施(infrastructure)希望的狀態。什麼是聲明基礎設施希望的狀態？

### 從聲明基礎設施希望的狀態談到 K8S

說到聲明希望的狀態，這就要來了解一下屬於 Cloud Native 體系的 Kubernetes 了。

因為 Kubernetes 是使用 yaml 檔來建立或是修改所擁有的 K8S 元件。例如你想把某個服務擴展從 3 個 pod 擴展到 5 個 pod。那麼你就會修改 yaml 檔裡面的數字。並使用 kubectl 來應用 yaml 檔案至所對應的 K8S 集群。

簡單說就是 yaml 等於你目前的 K8S 系統狀態。歡迎來到 yaml 的世界！

### GitOps 解決了哪些痛點？

當我們想要對 K8S 集群做出改變的時候，我們可以做什麼事情？可以直接下 kubectl apply 直接對 K8S 集群進行修改。可是這樣就出現了一個問題，當有許多人都想要對同一個 K8S 進行修改的時候。A 怎麼知道 B 做了什麼修改？如果 B 修改過後，A 並不知道 B 修改了什麼，也進行了一次修改。那麼很有造成系統全面癱瘓。

Kubernetes 就像一個終極兵器，你可以讓他輕鬆的做到你想做的事情，例如：在幾分鐘內長出具有負載均衡能力的服務。但是也因此如果操作不當，後果會比傳統架構還要嚴重很多。

這就是 GitOps 出現的原因！

### GitOps 的原則

![](https://cdn-images-1.medium.com/max/2000/1*HHeZOMbdqCwuJ5GxiAkNQw.jpeg)

Weaveworks 提出 GitOps 的概念，並使用 Flux (不是前端的Flux) 來實作之。其中有幾個比較重要的原則：

 1. 整個系統必須是聲名式的

 2. 希望的狀態必須用 Git 做版控

 3. 在 Git 中獲准(appoved)的改變可以自動應用到系統上

 4. 軟體代理(Agent)必須確保系統正確性，如果不正確的話需要有警報通知使用者。

核心觀念其實就是讓你的系統具有「可觀測性」，你可以看到系統目前的狀態。並將所有對 K8S 做的操作，都透過 Git 來操作，這樣的話所有的操作過程都會是一個一個的 Commit。

下圖左邊是希望的狀態，也就是 Git 中定義的狀態。而實際的狀態，則是右邊。

![[https://github.com/weaveworks/awesome-](https://github.com/weaveworks/awesome-gitops)](https://cdn-images-1.medium.com/max/NaN/1*IDeYMbyPP8-V-L456PRFHg.jpeg)

如果我們使用的是 ArgoCD 可以輕鬆看到希望狀態與實際狀態的不同。

### 用 Argo CD 來了解 GitOps

![](https://cdn-images-1.medium.com/max/NaN/1*TgJWIt9bE2UDgKLwlp2_hA.jpeg)

ArogCD 是一款 GitOps 的實現。我們來看看上述說的 GitOps 原則到底是怎麼回事。

![](https://cdn-images-1.medium.com/max/NaN/1*rwgdphu1Aq59cG_stmrtRA.jpeg)

這是 Argo CD 的圖案，一支外太空章魚(還是什麼生物？)，他提供了強大的觀測介面。可以很好的觀測目前 Kubernetes 集群的狀態。

![](https://cdn-images-1.medium.com/max/NaN/1*8CA6GfxOSSb9t3FLRPUePA.jpeg)

來動手做做看！做一個小改變

![](https://cdn-images-1.medium.com/max/NaN/1*j_vkc6z1D78bGRIYqttJxA.jpeg)

Argo CD 顯示 Out of sync

![](https://cdn-images-1.medium.com/max/NaN/1*lbeE9qAMq4OzWBpHDLcn2w.jpeg)

透過 ArgoCD 可以看到到底對 K8S 集群做了哪些改變。

![](https://cdn-images-1.medium.com/max/NaN/1*pkCl-99a3QdDNqLE1r02-w.jpeg)

手動按下 Sync

![](https://cdn-images-1.medium.com/max/NaN/1*bCNQ2LDOOEoMKx_4TPra0A.jpeg)

看看到底發生了什麼事

![](https://cdn-images-1.medium.com/max/NaN/1*6J7atxk6ZSVwoArW31lAZA.jpeg)

並且部屬也有版控，萬一不幸弄壞，也可以即時回到上一版本。

![](https://cdn-images-1.medium.com/max/NaN/1*6I5lTwZkVhrYWXCYhSCqMQ.jpeg)

用起來是不是很輕鬆寫意！

### 心得

GitOps 提供 K8S 集群良好可觀測性，並且把開發或是運維對集群的操作記錄在 Git 中，讓任何人可以清楚看到集群做了哪些改變。並且提供了單一的出口，讓開發者和運惟人員不會私自的對集群改變。萬一被改變了，也提供了警報功能來通知主要運維人員。這樣的方式對於 K8S 日常維護來說，無疑是提供了一個非常實用且可靠的方案。

### 同場加映

2021/5/11 update，本篇是 ArgoCD 入門，如果想要看看 ArgoCD 進階運用，請參閱小城老師的文章：
[**Argo CD ApplicationSet Controller: 世界為我而轉動！**
*新推出的 Argo CD ApplicationSet Controller 讓使用者在單個 YAML 檔案內像是寫 For Loop 程式，隨需求一次性地建立大量的 Application CRD，就讓我們使用實際範例來看它如何解放…*medium.com](https://medium.com/starbugs/argo-cd-applicationset-controller-%E4%B8%96%E7%95%8C%E7%82%BA%E6%88%91%E8%80%8C%E8%BD%89%E5%8B%95-a837f9392298)

### 參考資料

- [Guide To GitOps](https://www.weave.works/technologies/gitops/)

- [淺談 GitOps 的概念](https://www.hwchiu.com/gitops.html)
