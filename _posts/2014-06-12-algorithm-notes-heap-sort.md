---
layout: post
title: 'Algorithm - Heap sort'
date: 2014-06-12 05:56
comments: true
categories: 
---

###Heap
heap可看作是幾乎完整的二元樹的陣列。
![圖片1.png](http://user-image.logdown.io/user/6141/blog/6148/post/205838/SpOCGl2zTWCZWgroz4ow_%E5%9C%96%E7%89%871.png)
![圖片2.png](http://user-image.logdown.io/user/6141/blog/6148/post/205838/AyITvrIOS4uyIiqC1OIn_%E5%9C%96%E7%89%872.png)
PARENT(i)
return i/2
LEFT(i)
return 2i
RIGHT(i)
return 2i+1


####Max heap與Min heap

Max heap最大的元素在根部
Min heap最小的元素在根部

heapsort用的是Max heap
而priority queue用的則是Min heap，每次取出的會是最小的值。