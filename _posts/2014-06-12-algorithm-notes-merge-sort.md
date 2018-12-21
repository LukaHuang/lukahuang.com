---
title: '[Algorithm]  Merge sort(ch2.3)'
date: 2014-06-12 06:33
comments: true
categories:
---

#原理
每跑過一次merge-sort主程式都會把陣列分割成兩半。直到分成每個元素分離之後，再開始兩兩的排序並合併。合併到最後即為排序好的結果。
![Merge_sort_algorithm_diagram.svg.png](http://user-image.logdown.io/user/6141/blog/6148/post/205863/zNf6ZUBgTYeikWTg5zfb_Merge_sort_algorithm_diagram.svg.png)

#程式碼說明
MERGE-SORT主程式負責分割陣列，等到分割到不能分割，也就是每個陣列剩下一個元素的時候，改由MERGE副程式兩兩進行合併，合併的時候加以排序，等到全部合併成一個陣列之後，剛好就排序完成了。
```
MERGE-SORT(A,p,r)
1  if p < r
2     q = (p+r)/2
3     MERGE-SORT(A,p,q)
4     MERGE-SORT(A,q+1,r)
5     MERGE(A,p,q,r)
```
```psuedocode
MERGE(A,p,q,r)
1  n1 = q - p + 1
2  n2 = r - q
3  let L[1..n1+1] and R[1..n2+1] be new arrays
4  for i = 1 to n1
5     L[i] = A[p+i-1]
6  for j = 1 to n2
7     R[j] = A[q+j]
8  L[n1+1] = INF
9  R[n1+1] = INF
10 i = 1
11 j = 1
12 for k = p to r
13    if L[i] <= R[j]
14       A[k] = L[i]
15       i = i + 1
16    else
17       A[k] = R[j]
18       j = j + 1
```
#Java程式碼實作
使用下列網站的範例做說明
[Mergesort in Java - Tutorial - Lars Vogel](http://www.vogella.com/tutorials/JavaAlgorithmsMergesort/article.html)
```java
package de.vogella.algorithms.sort.mergesort;

public class Mergesort {
  private int[] numbers;
  private int[] helper;

  private int number;

  public void sort(int[] values) {
    this.numbers = values;
    number = values.length;
    this.helper = new int[number];
    mergesort(0, number - 1);
  }

  private void mergesort(int low, int high) {
    // check if low is smaller then high, if not then the array is sorted
    if (low < high) {
      int middle = low + (high - low) / 2;
      mergesort(low, middle);
      mergesort(middle + 1, high);
      // Combine them both
      merge(low, middle, high);
    }
  }

  private void merge(int low, int middle, int high) {

    // Copy both parts into the helper array
    for (int i = low; i <= high; i++) {
      helper[i] = numbers[i];
    }

    int i = low;
    int j = middle + 1;
    int k = low;
    // Copy the smallest values from either the left or the right side back
    // to the original array
    while (i <= middle && j <= high) {
      if (helper[i] <= helper[j]) {
        numbers[k] = helper[i];
        i++;
      } else {
        numbers[k] = helper[j];
        j++;
      }
      k++;
    }
    // Copy the rest of the left side of the array into the target array
    while (i <= middle) {
      numbers[k] = helper[i];
      k++;
      i++;
    }

  }
}
```


#參考資料
[[Sort] 淺談 merge sort](http://blog.kuoe0.tw/posts/2013/03/06/sort-about-merge-sort)
