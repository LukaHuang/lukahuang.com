---
title: 'Algorithm - 時間複雜度整理'
date: 2014-06-15 09:00
comments: true
categories:
---

以下資料摘自Ting的小筆記

###Sorting Algorithms
![1362037892-2193125962.png](http://user-image.logdown.io/user/6141/blog/6148/post/205697/YsOupGDzSjSsir8T9rcD_1362037892-2193125962.png)

###Graph Algorithms
|      | Graph algorithm       　 | 時間複雜度   | strategy | negative weight |
| ---- | ------------------------ | ------------ | -------- | --------------- |
| Ch22 | BFS(Breath-First Search) | O(V+E)       | greedy   |                 |
|      | DFS(Depth-First Search)  | O(V+E)       | greedy   |                 |
| Ch23 | Kruskal                  | O(E lgV)     | greedy   | allowed         |
|      | Prim                     | O(E+V lgV)   | greedy   | allowed         |
| Ch24 | Bellman-Ford             | O(VE)        | DP       | allowed         |
|      | Dijkstra's               | O(E+V lgV)   | greedy   | not allowed     |
| Ch25 | Floyd-Warchall           | O(V^3)       | DP       | allowed         |
|      | Johnson's                | O(VE+V^2lgV) | gd + DP  | allowed         |


###參考資料
[Ting的小筆記 - Algorithm time complexity 演算法時間複雜度整理](http://tingtseng.pixnet.net/blog/post/39924871-algorithm-time-complexity-%E6%BC%94%E7%AE%97%E6%B3%95%E6%99%82%E9%96%93%E8%A4%87%E9%9B%9C%E5%BA%A6%E6%95%B4%E7%90%86)
[Sorting Introduction](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Sorting%20Algorithms/sorting.html)
[Sorting Comparison](http://www.cprogramming.com/tutorial/computersciencetheory/sortcomp.html)
[小殘 - Bubble sort](http://emn178.pixnet.net/blog/post/93779892-%E6%B0%A3%E6%B3%A1%E6%8E%92%E5%BA%8F%E6%B3%95%28bubble-sort%29)
[排序(sorting)](http://spaces.isu.edu.tw/upload/18833/3/web/sorting.htm)