/*
https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

// SOLUTION 1
function cubeOdd(arr) {
    // cube numbers, filter for odd ones
    const odd = arr.map(num => num**3).filter(n => n % 2 !== 0);
    // sum numbers
    const sum = odd.reduce((acc, c) => acc + c, 0);
    // if the sum isn't a number, return undefined. otherwise return the sum
    return isNaN(sum) ? undefined : sum;
  };
  
console.log(cubeOdd([1, 2, 3, 4], 28));

// SOLUTION 2
function cubeOdd(arr) {
    const isNumeric = arr.every(num => !isNaN(num**3));
    return !isNumeric ? undefined : arr.map(n => n**3).filter(num => num%2!==0).reduce((a, b) => a + b, 0)
  };