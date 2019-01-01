---
author: Luka
title: Algorithm - Dijkstra's Algorithm
date: 2014-06-10 16:00
comments: true
tags:
- Algorithm
---

### 資料結構
Q是一個以d值來做鍵值的Queue，取出時會從最小的d開始取，也就是取出距離最短的頂點V。
S是一個頂點的集合，用來存放從Q中刪除的頂點。

### Dijkstra's Algorithm

```
DIJKSTRA(G,w,s)
1.  INITIALIZE-SINGLE-SOURCE(G,s)
2.  S = ∅
3.  Q = G.V
4.  while Q ≠ ∅
5.     u = EXTRACT-MIN(Q)
6.     S = S ∪ {u}
7.     for each vertex v ∈ G.Adj[u]
8.        RELAX(u,v,w)
```

第3行初始化Q包含Graph中所有的頂點V。
第5行EXTRACT-MIN(Q)搜尋了Q中有最小的u.d的頂點u，將u從Q中刪除，並返回給用戶。
第6行把u加到S中。

```
INITIALIZE-SINGLE-SOURCE(G,s)
1.  for each vertex v ∈ G.V
2.     v.d = ∞
3.     v.pi = NIL
4.  s.d = 0
```

```
RELAX(u,v,w)
1.  if v.d > u.d + w(u,v)
2.     v.d = u.d + w(u,v)
3.     v.pi = u
```

### 時間複雜度
Basically the algorithm works as follows:

1. Initialize d's, π's, set s.d = 0, set S = ∅, and Q = G.V (i.e. put all the vertices into the queue with the source vertex having the smallest distance)
2. While the queue is not empty, extract the minimum vertex (whose distance will be the shortest path distance at this point), add this vertex to S, and relax (using the same condition as Bellman-Ford) all the edges in the vertex's adjacency list for vertices still in Q reprioritizing the queue if necessary

The run time of Dijkstra's algorithm depends on how Q is implemented:

- Simple array with search ⇒ O(V2 + E) = O(V2)
- Binary min-heap (if G is sparse) ⇒ O((V + E) lg V) = O(E lg V)
- Fibonacci heap ⇒ O(V lg V + E)

### Dijkstra's Algorithm的正確性
因為Dijkstra's Algorithm永遠選擇最輕或最靠近的頂點來加入S，所以說們說它是採用貪婪的策略。貪婪策略不是擁有都會得到最佳的結果，所以我們必須推論它。因為太長就不推倒，詳見Theo24.6。

### 參考資料
[Dijkstra's Algorithm](http://faculty.ycp.edu/~dbabcock/cs360/lectures/lecture22.html)