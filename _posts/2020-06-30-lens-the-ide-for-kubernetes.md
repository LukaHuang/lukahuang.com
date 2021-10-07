---
author: Luka
title: Kubernetes IDE - Lens 用圖形化介面管理 K8S
published: true
date: 2020-06-30 17:01
tags:
  - Kubernetes
comments: true
---

![https://k8slens.dev](https://cdn-images-1.medium.com/max/2400/0*P3QeV7d9iPBNeOCr.png)

以往我們在管理 Kubernetes 集群的時候，需要大量的命令列操作，需要去四處找尋需要的資訊，例如你想看 Node 的狀態你可能需要在 AWS Console 上面看，如果你用的是 GKE 的話你就需要到的 GCP 的後台上看。你想要進入 Pod 你需要先下 kubectl get pods取得 pod 列表，接著再下 kubectl exec -it pod/xxxpod -- bash 進入。

這些功能現在 Lens 全部幫你整合進去了。它能夠讓你快速的瀏覽你的 K8S 集群狀況，並且即時反應 K8S 集群的狀態讓你可以做相對應的反應。我們就來看看 Lens 有哪些殺手級的功能吧！

## Lens 有哪些殺手級功能

## 1. 實時監控 pod 的狀態 (realtime monitoring)

可以實時監控 pod 的狀態，不需要手動刷新，這個功能我覺得滿方便的。一般來說你想要重複獲取 pod 的狀態需要在終端機中輸入 kubectl get pods，用終端機下指令的方式只能知道下指令的「當下的狀態」，如果你想要獲得你想要的狀態，你必須不斷下指令。而現在使用 Lens 你只需要瞄一下螢幕，就可以知道 pod 就緒了沒，因為 Lens 會告訴你最即時的 Pod 狀態。

![為了不透漏機密資訊我使用 Lens 官方網站的圖片 ([https://k8slens.dev/](https://k8slens.dev/))](https://cdn-images-1.medium.com/max/2000/1*ce7US7IAR0EPDvYlQIrhBQ.png)

## 2. 快速查看 Pod 的 CPU 、記憶體用量

我覺得這是令人滿驚艷的功能，Newrelic 針對 K8S 推出的監控工具操作起來都沒有那麼直覺。因此目前的監控方案用 Newrelic 來看吞吐量與 request 的消耗時間，方便做一些效能調校。而觀看 Kubernetes 整體的狀態則是使用 Lens 為主。能夠快速找到想要的資訊並能夠反應實時(realtime)的狀態真的挺重要。

![image from [https://k8slens.dev/](https://k8slens.dev/)](https://cdn-images-1.medium.com/max/2000/1*Jv4voRbrXD7vFogoFwBskg.png)

## 3. 快速觀看 Node 的狀態

Pod 是 Kubernetes 中的最小單位，但最後他還是會跑在某一台實體機器，也就是 Node 上面，所以我們可以快速的看到 Node 的狀態也是很重要的。

沒錯，Lens 就是那麼的威，可以快速的看到 K8S 中 Node 的 CPU、記憶體用量，還有 Node 上跑了哪些 Pod，運行了哪些資源。

我覺得根本整合度極高。偏愛用終端機的我，目前也離不開 Lens 的方便。

![](https://cdn-images-1.medium.com/max/3340/1*XGv9gmMz73ZKZjw_bEb_ww.png)

## 4. Event 列表，能夠即時知道 K8S 集群發生了什麼事

例如：一個 pod 中的 readiness probe 告訴你：你的 pod 還沒有準備好啦！Lens 就有這個功能，可以即時知道 K8S Cluster 的事件。不然很有可能 Kubernetes 發生了一些事情，但是你沒有察覺。

## 5. Pod -> Terminal 一鍵搞定

平常要進入某 Pod 的時候先 k get pods，然後複製貼上 pod 的名稱，輸入 k exec -it pod/your-pod-name -- /bin/bash 每次做真的有點煩。Lens 直接列出所有 Pod，你只需要點選有問題的 Pod，或是你想要進去的 Pod，點擊終端機鍵，即可連進 Pod 裡面。真～是～太～方～便～啦～！

![](https://cdn-images-1.medium.com/max/2790/1*yGkNYU4kdqJ85C7u-Aq0Og.png)

## 為什麼 Kubernetes 能夠有一款 IDE？

最後來聊一聊為什麼 Kubernetes 能夠出一款 IDE？一般來說 IDE 是基於語言設計出的 IDE，例如：java 有 Eclipse，c# 有 visual studio，Python 有 Pycharm，PHP 有 Phpstorm… 等等。

這些以語言為基礎的 IDE 可以提供語言為基礎的一些好用方法。例如方法的自動完成、原始碼的快速查找，或是提取方法、提取參數 … 等等重構的功能。基於每個語言的特性，IDE 提供不同的特性。

Kubernetes 的 IDE 是怎麼回事呢？各家提供雲服務的平台紛紛推出相對應 K8S 的服務。例如：Google 有 GKE，AWS 有 EKS，或是也可以自行架設 Kubernetes 集群。

這些 Kubernetes 服務都遵循著相同的 Kubernetes 規範，聽起來好像有點繞，如果不是因為有 Kubernetes 這樣明確的規範，就不可能有 IDE 產生。

例如：Google 的雲端平台 GCP 上如果你想要開機器，跟 AWS 平台上你想要開機器，那麼你是無法用一套 IDE 來監控或是控制兩者的機器狀態的。因為 Google 和 AWS 機器呼叫的規格各自有各自的定義，無法共通。

而 Kubernetes 大家都是透過 kubectl 來跟 Kubenetes Control Panel 溝通。Kubenetes 中的元件，例如：Pod、Service、Deployment … 等等，在各家雲服務商也都是遵照相同規範實作，因此可以使用一款 IDE，就能夠監控各家的 Kubernetes 集群。

## **結語**

Lens 的出現讓我用最少的力氣就可以快速的看到想看的資訊。而 Newrelic 的方式比較像是以往的 APM 的監控法。跟以前只有機器的時代，多了一層 Kubernetes 多了滿多思考點。另外警報(Alert)又是另一套系統了。如何在問題出現的時候，快速定位問題，在使用者察覺前解決掉，是一個有趣的挑戰。
>  最後不免俗的感謝大家觀看，喜歡我的文章請訂閱 Starbugs 星巴哥技術專欄，每週推送原創好文😀😀😀
