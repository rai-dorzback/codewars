/*
https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.

Examples
[1, 2, 3] returns 6 because the maximum product is obtained from multiplying 
2∗3=6
[9, 5, 10, 2, 24, -1, -48] returns 50 because the maximum product is obtained from multiplying 
5∗10=50
[-23, 4, -5, 99, -27, 329, -2, 7, -921] returns -14 because the maximum product is obtained from multiplying 
*/

// SOLUTION 1
function adjacentElementsProduct(arr) {
  let maxProd;
  for(let i = 1; i < arr.length; i++) {
    // multiply the 2 that are next to each other
    let prod = arr[i] * arr[i-1];
    // if maxProd has already been set, check if the new prod is larger
    if(maxProd && prod > maxProd) {
      maxProd = prod;
    // if maxProd is still undefined, set it to the current prod
    } else if(!maxProd) {
      maxProd = prod;
    };
  };
  return maxProd;
};

// SOLUTION 2: make arr of products, find max
function adjacentElementsProduct(arr) {
  let prodArr = [];
  for(let i = 1; i < arr.length; i++) {
    const prod = arr[i] * arr[i-1];
    prodArr.push(prod);
  };
  const maxProd = Math.max(...prodArr);
  return maxProd;
};
