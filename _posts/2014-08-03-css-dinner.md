---
author: StevenTTuD
title: CSS Dinner - 好玩又有效的 CSS 教學
published: true
date: 2014-08-03 03:04
tags:
  - CSS
categories:
  - Front-end
comments: true

---

# CSS Dinner

[CSS Diner](http://flukeout.github.io/) 是一個很有趣的小遊戲，你必須使用css來選取桌上扭動的物體，
全部26關玩完對 CSS selector 想忘也忘不了。
css selector 在 javascript 或是 jQeury 也會用到，不熟的話到時候還是需要花額外的時間加強。
有神人整理成一系列好玩練習效果又顯著的教學，好教學不玩嘛？XD

## 學習目標

1. Univeral, Type selector, Class selector, ID selector的用法。
2. 了解```ul > ui {}```和```ul ui{}```的不同
3. 了解A+B與A~B的不同。
4. 了解pasudo selector的用法。

## Memo

### 1. `A+B` 與 `A~B` 的不同
A+B 代表與 A 相鄰的 B。A~B 代表與 A 同一層的 B 都選。

### 2. Pseudo Class Selector

[Meet the Pseudo  Class Selectors](http://css-tricks.com/pseudo-class-selectors/)

## 關卡筆記

### 第12關 Adjacent sibling combinator

卡了很久，想說 `div+apple` 應該沒錯，不然 `.table+apple` 應該萬無一失。
忽略了在桌子上面有其他的蘋果。
最後使用了 `plate+apple` 解決了這套題目。

### 第13關 General sibling combinator
`A ~ B` will select all B that follow a A

### 第17關 Last Child Pseudo-selector
這關要用last-child來抓出需要的兩個元素，不可以使用其他的方式。
div plate apple:last-child, div pickle:last-child

### 破關心得
全部做完後，發現他每一題都沒有重複，有些selector感覺上不太用的到，但是確實很熟練了selector的作法。
有些容易混淆的東西一定要搞清楚，並且記熟。

## 參考的小抄

[Child and Sibling Selectors](http://css-tricks.com/child-and-sibling-selectors/)
[CSS筆記](http://bombertw.logdown.com/posts/2014/04/18/bomber-day-8-introduction-to-css)
[W3Cschool A~B](http://www.w3schools.com/cssref/sel_gen_sibling.asp)