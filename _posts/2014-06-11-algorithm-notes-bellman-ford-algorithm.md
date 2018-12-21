---
title: 'Algorithm - 最短路徑問題(ch24)'
date: 2014-06-11 07:49
comments: true
categories:
---
### 最短路徑問題(Shortest Path)

（以下說明摘錄自Algorithm - (http://www.csie.ntnu.edu.tw/~u91029/Path.html#2)）
「最短路徑」是由起點到終點、權重最小的路徑。

最短路徑問題包括下列幾種：
Point-to-Point Shortest Path，點到點最短路徑：
給定起點、終點，求出起點到終點的最短路徑。一對一。

Single Source Shortest Paths，單源最短路徑：
給定起點，求出起點到圖上每一點的最短路徑。一對全。

All Pairs Shortest Paths，全點對最短路徑：
求出圖上所有兩點之間的最短路徑。全對全。

### Relaxation（鬆弛）
最短路徑有算法一個共通的重要概念。簡單的說找到捷徑以縮短原本路徑，便是 relaxation 。
```
INITIALIZE-SINGLE-SOURCE(G,s)
1.  for each vertex v ∈ G.V
2.     v.d = ∞
3.     v.pi = NIL
4.  s.d = 0
```
跟之前一樣先初始化v.d與v.pi。
```
RELAX(u,v,w)
1.  if v.d > u.d + w(u,v)
2.     v.d = u.d + w(u,v)
3.     v.pi = u
```
透過Relaxation我們可以測試可否利用頂點u來增進v的最短路徑。如果可以就更新v.d與v.pi。

### 參考資料
[演算法筆記-Path](http://www.csie.ntnu.edu.tw/~u91029/Path.html#2)
[Lecture 21: Single Source Shortest Paths - Bellman-Ford Algorithm](http://faculty.ycp.edu/~dbabcock/cs360/lectures/lecture21.html)