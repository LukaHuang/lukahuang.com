---
title: 'Algorithm - Quick sort'
date: 2014-06-12 06:33
comments: true
tags:
- Algorithm
---
### 概念
從數列中挑選一個pivot，大於pivot放在右邊，小於pivot放在左邊，重複循環最後得出的陣列即為排序結果。

### 流程
(請搭配虛擬碼的QUICKSORT主程式一起服用)
1. 選擇陣列中的一個元素作為pivot
2. 比pivot小的都移到pivot的左邊，比pivot大的都移到pivot的右邊。
3. 對pivot左邊和右邊的兩個陣列分別再做一次QUICKSORT()，形成一個遞迴呼叫。
![quicksort.jpg](http://user-image.logdown.io/user/6141/blog/6148/post/205864/WGqApmAOSfylxMIEmhql_quicksort.jpg)


### 程式碼
```
QUICKSORT(A,p,r)
1  if p < r
2     q = PARTITION(A,p,r)
3     QUICKSORT(A,p,q-1)
4     QUICKSORT(A,q+1,r)
```
PARTITION()這個副程式的作用是將比pivot小的數放在pivot左邊，比pivot大的放在pivot的右邊。最後回傳pivot所在的位置存到變數q裡面，方便下一次quicksort的執行。
```
PARTITION(A,p,r)
1  x = A[r]
2  i = p - 1
3  for j = p to r-1
4     if A[j] <= x
5        i = i + 1
6        exchange A[i] with A[j]
7  exchange A[i+1] with A[r]
8  return i+1
```
### Java實現

```java
package quicksort;

/**
 *
 * @author Steven
 */
public class QuickSort  {

private float[] arr ;

  public void sort(float[] array) {
    this.arr = array;
    quickSort( 0 , array.length - 1);
  }

 public void quickSort(int left, int right) {
      int pivot = partition(left, right);
      if (left < pivot - 1)
            quickSort(left, pivot - 1);
      else if (pivot < right)
            quickSort( pivot, right);
 }

 public void findSmallest(float arr[], int k){
     quickSort( 0 , arr.length - 1, k);
 }

 private  void quickSort( int lefe, int right,int k){

     int pivot = partition(lefe, right);

     if(pivot == k-1){
         System.out.printf("第%d小數為%.2f\n", k, arr[pivot]);
     }
     else if (pivot > k-1)
         quickSort( lefe, pivot-1 , k);
     else
         quickSort( pivot, right, k);


 }

  private int partition(int left, int right)
  {
      int i = left, j = right;
      float tmp;
      float pivot = arr[(left + right) / 2];

      while (i <= j) {
            while (arr[i] < pivot)
                  i++;
            while (arr[j] > pivot)
                  j--;
            if (i <= j) {
                  tmp = arr[i];
                  arr[i] = arr[j];
                  arr[j] = tmp;
                  i++;
                  j--;
            }
      };

      return i;
   }


}
```
### 參考資料
[小殘 - Quick Sort](http://emn178.pixnet.net/blog/post/88613503-%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F%E6%B3%95(quick-sort))
