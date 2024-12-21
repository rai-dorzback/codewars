/*
https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript
Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)
*/

const remainder = (n, m) => n > m ? n % m : m % n;
