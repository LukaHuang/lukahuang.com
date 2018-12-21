---
author: StevenTTuD
title: 'Algorithm - BFS(Breadth-first Search)(ch22.1 22.2)'
date: 2014-06-10 20:09
comments: true
categories:
---

## Graph algorithm 符號說明

  Graph用```G=(V,E)```來表示，V是Vertex的縮寫，也就是頂點。E是Edge的縮寫，也就是邊。理解V和E分別是頂點和邊之後，就不難理解Graph是由點和邊構成，所以表示成```G=(V,E)```。從頂點u到頂點v的一個邊則用```(u,v)```來表示。

  表示Graph ```G=(V,E)```有兩種方式，分別是adjacent matrix與adajecent list。比較常用adjacent list來表示graph，因為它花費的cose比較小。表示一個儲存Graph中鄰近u的所有頂點的adjacent list，用```Adj[u]```來表示。

# Breadth-first Search(寬度優先搜尋)

Minimum spanning tree中的Prim演算法和單一來源最短路徑問題中的dijkatra演算法都使用類似BFS的演算法的方法。BFS有系統的搜尋Graph ```G=(V,E)```的邊來發現可以從```Source(起始點，之後縮寫成S)```到達的每個頂點。

# BFS-Tree的建構

BFS-Tree : 產生一棵以```S```為根的BFS-Tree來包含所有可到達的頂點。

1. 最初只包含他的根，即來源頂點S。
2. 每當掃瞄一個已經被發現的頂點u的adjacent list時，發現有白色的頂點V，麼頂點V和邊(u,v)就會被加入樹中。因為經由u才找到v，所以稱u是v的```predecessor```(先輩)或稱為parent。

###頂點上的資料結構
每個頂點儲存了一些屬性(attribute)來幫助實現BFS-Tree。
u.color - 表示頂點u的顏色
u.π - predecessor vertex，用來紀錄頂點的先輩。
u.d - 儲存起點s到u點的距離

除了頂點的資料結構之外，還需要一個queue來管理灰色的頂點，代號```Q```。

BFS將頂點塗成白色、灰色與黑色來區分他們的狀態。
**白色**代表未造訪過。
**黑色**代表所有鄰近的頂點都被發現了。
**灰色**則是介於兩者之間。
一個頂點在第一次造訪的時候，從白色變成灰色或黑色，稱為discover(被發現)。

###BFS演算法
```
BFS(G,s)
1.  for each vertex u ∈ G.V - {s}
2.     u.color == WHITE
3.     u.d = INF
4.     u.pi = NIL
5.  s.color = GRAY
6.  s.d = 0
7.  s.pi = NIL
8.  Q = ∅
9.  ENQUEUE(Q,s)
10. while Q ≠ ∅
11.    u = DEQUEUE(Q)
12.    for each v ∈ G.Adj[u]
13.       if v.color == WHITE
14.          v.color = GRAY
15.          v.d = u.d + 1
16.          v.pi = u
17.          ENQUEUE(Q,v)
18.    u.color = BLACK
```
程式說明: 1-9行是程式初始化。1-4行，將在Graph中頂點塗成白色，意思是未探索過。因為所有的點還未走訪過，所以把d設為INF代表的意思是無限大。還沒有predecessor所以先設為nill，代表空的意思。5-7行設定來源頂點s為灰色，d的定義是離s的距離有多遠，s離s的距離是0，所以設為0。來源點s沒有先輩，所以設為null。8-9行把Q這個queue初始化，裡面只存放來源頂點s。

第10-18行被一個while迴圈包住，當沒有灰色頂點的時候才會跳出，也就是當Q中沒有存放任何灰色頂點，Q=null時才會結束。
第11-12行，從Q中取出一個灰色頂點u。把u的相鄰邊，也就是這個頂點u的adjacent list中儲存的相鄰頂點v(可能有很多個)，用for迴圈一一讀出來。13-17行，如果取出的頂點是白色，那就把它塗成灰色，標記他為造訪過的頂點。距離+1。pi先輩設為u。把v加入到Q中。最後頂點u的所有鄰近的頂點都被發現了，所以設為黑色。

###時間複雜度

![2014-06-11_115545.jpg](http://user-image.logdown.io/user/6141/blog/6148/post/205643/fYcrGvLnQYaCdOXKppAG_2014-06-11_115545.jpg)

####參考資料
[ycp cs 360](http://faculty.ycp.edu/~dbabcock/cs360/lectures/lecture16.html)
Introduce to algorithm