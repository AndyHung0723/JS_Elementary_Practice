# 初級 JavaScript 題目練習
## Level 1
* 用 for loop 以及 while 迴圈，印出 1~9
```
// 1
// 2
// ...
// 9
```
* 請寫一個函式叫做 print，接收一個是數字的參數 n，並且印出 1~n
```
// 1
// 2
// ...
// n
```
* 寫一個函式 star，接收一個參數 n，並印出 n 個 *
```
// star(1) 預期輸出：
// *
// star(5) 預期輸出：
// *****
```
* 請寫出一個叫做 starReturn 的 function 並且接受一個參數 n，能回傳 n 個 *
```
// console.log(starReturn(1)); 預期輸出：
// *
// console.log(starReturn(5)); 預期輸出：
// *****
```
* 請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫
```
// isUpperCase("abcd") 正確回傳值：false
// isUpperCase("Abcd") 正確回傳值：true
```
* 請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1
```
position("abcd") 正確回傳值：-1
position("AbcD") 正確回傳值：A 0
position("abCD") 正確回傳值：C 2
```
* 請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n
```
// findSmallCount([1, 2, 3], 2) 預期回傳值：1
// findSmallCount([1, 2, 3, 4, 5], 0) 預期回傳值：0
```
* 請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和
```
// findSmallerTotal([1, 2, 3], 3) 正確回傳值：3
// findSmallerTotal([1, 2, 3], 1) 正確回傳值：0
// findSmallerTotal([3, 2, 5, 8, 7], 999) 正確回傳值：25
// findSmallerTotal([3, 2, 5, 8, 7], 0) 正確回傳值：0
```
* 請寫一個函式 findAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）
```
// findAllSmall([1, 2, 3], 10) 正確回傳值：[1, 2, 3]
// findAllSmall([1, 2, 3], 2) 正確回傳值：[1]
// findAllSmall([1, 3, 5, 4, 2], 4) 正確回傳值：[1, 3, 2]
```
* 請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和
```
// sum([1, 2, 3]) 預期回傳值：6
// sum([-1, 1, 2, -2, 3, -3]) 預期回傳值：0
```
