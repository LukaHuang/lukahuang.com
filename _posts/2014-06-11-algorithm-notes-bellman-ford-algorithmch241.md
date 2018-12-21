---
title: 'Algorithm - Bellman-Ford Algorithm(ch24.1)'
date: 2014-06-11 07:50
comments: true
categories:
---
###BELLMAN-FORD Algorithm

BELLMAN-FORD演算法是個很容易撰寫的演算法。而且他可以偵測負重量循環(negative weight cycle)。

```
BELLMAN-FORD(G,w,s)
1.  INITIALIZE-SINGLE-SOURCE(G,s)
2.  for i = 1 to |G.V|-1
3.     for each edge (u,v) ∈ G.E
4.        RELAX(u,v,w)
5.  for each edge (u,v) ∈ G.E
6.     if v.d > u.d + w(u,v)
7.        return FALSE
8.  return TRUE
```
第2-4行的for迴圈執行Graph所有的邊的數量-1次，對每個邊做[鬆弛](http://logdown.com/account/posts/205707-algorithm-notes-bellman-ford-algorithm/preview)一次。
第5-8行檢查是否有負重量循環，回傳TRUE的話代表有負重量循環，換句話說正常情況下會回傳FALSE。
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

###時間複雜度
Initialize d's, π's, and set s.d = 0
⇒ O(V)
Loop |V|-1 times through all edges checking the relaxation condition to compute minimum distances
⇒ (|V|-1) O(E) = O(VE)
Loop through all edges checking for negative weight cycles which occurs if any of the relaxation conditions fail
⇒ O(E)
**The run time of the Bellman-Ford algorithm is O(V + VE + E) = O(VE)**.

###參考資料
[Lecture 21: Single Source Shortest Paths - Bellman-Ford Algorithm](http://faculty.ycp.edu/~dbabcock/cs360/lectures/lecture21.html)