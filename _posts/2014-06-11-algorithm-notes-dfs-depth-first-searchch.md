---
title: 'Algorithm - DFS(Depth-First Search)(ch22.3)'
date: 2014-06-11 06:59
comments: true
tags:
- Algorithm
---

### 頂點的資料結構

DFS與BFS不同的是，在頂點上須標明兩個時間標籤(Timestamp，以頂點v為例子，就是v.d和v.f這兩個屬性。所以變成以下三個。
u.π - predecessor vertex.
u.d - timestamp when the vertex is first discovered (and is subsequently colored gray)
u.f - timestamp when the vertex has been fully explored (and is subsequently colored black) ⇒ u.d < u.f

### DFS 深度優先搜尋演算法

```
DFS(G)
1.  for each vertex u ∈ G.V
2.     u.color = WHITE
3.     u.pi = NIL
4.  time = 0
5.  for each vertex u ∈ G.V
6.     if u.color == WHITE
7.        DFS-VISIT(G,u)
```

第1-4行進行初始化。把Graph中的所有點設為白色（代表未造訪的意思），先輩(predecessor)設為nill。第四行重置全域時間計數器。
第5-8行檢查是否要進入DFS-VISIT: 輪流檢查頂點V的adjacent list裡面的每個頂點，如果碰到白色頂點就使用DFS-VISIT來造訪它。

```
DFS-VISIT(G,u)
1.  time = time + 1
2.  u.d = time
3.  u.color = GRAY
4.  for each v ∈ G.Adj[u]
5.     if v.color == WHITE
6.        v.pi = u
7.        DFS-VISIT(G,v)
8.  u.color = BLACK
9.  time = time + 1
10. u.f = time
```

第1行全域變數time+1，第2行把更新過的時間存進頂點u的時間標籤d內。
第3行在u是白色的時候呼叫DFS-VISIT(G,u)，這時u已經造訪過了，塗成灰色。
第4-7行檢查鄰接u的每個頂點v，如果v是白色的就遞迴地拜訪之。
第8行當u的鄰接頂點v都被拜訪過後，此時把u塗成黑色。
第9-10行，將全域時間變數time+1並儲存到u.f。
每呼叫一次DFS-VISIT(G,u)就會創造一顆根為u的DFS-Tree，所以在DFS-VISIT(G,u)中的遞迴呼叫結構會構成一個DFS森林(DFS-Forest)。

### 邊的分類
After DFS, all of the edges in the graph can then be classified as either:
DFS還有一個額外的功能，它可以辨別邊的種類，而邊有下列四種：

**Tree edge** - edge in one of the depth-first trees,
i.e. v is first discovered from u ⇒ if v is white when (u,v) is explored, then (u,v) is a tree edge
**Back edge** - non-tree edges connecting u to an ancestor of v
⇒ if v is gray when (u,v) is explored, then (u,v) is a back edge
**Forward edge** - non-tree edges connecting u to a decendant of v
⇒ if v is black when (u,v) is explored and u.d < v.d, then (u,v) is a forward edge
**Cross edge** - all other edges
⇒ if v is black when (u,v) is explored and v.d < u.d, then (u,v) is a cross edge