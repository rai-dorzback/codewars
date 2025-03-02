/*
https://www.codewars.com/kata/583ef2456e39941f810001c5/train/javascript
Given an unsorted array arr that contains some positive integers. It may be one of the following:

1. There are numbers 1 to n, only one number is 
   duplicate(repeated two times), the other numbers are unique. 
   That is, there are n+1 elements in the array. 
   e.g. [1,2,3,6,5,4,1]

2. There are numbers 1 to n, only one number is 
   unique, the other numbers are repeated two times. 
   That is, there are 2*n-1 elements in the array. 
   e.g. [1,2,3,1,2,3,4]
Your task is to determine the type of the array, if it is the first type, to return the duplicate; if it is second type, return the unique.

Note:
All numbers are positive integers that from 1 to n;
The length of array always more than 5;
Please pay attention to optimizing the code to avoid time out.
Some Examples
input                                output
[1,2,3,6,5,4,1]                      1
[1,2,3,1,2,3,4]                      4
[3,6,9,2,5,8,1,4,8,7]                8
[9,8,7,1,2,3,9,7,1,2,3,4,4,5,5,6,6]  8
*/

// SOLUTION 1: timed out
function duplicateOrUnique(arr){
  // filter for elements that are only there once 
  const unique = arr.filter((num, i, a) => a.indexOf(num) === a.lastIndexOf(num));
  
  let result;
  
  // if length of filtered list > 1
  if(unique.length > 1) {
    // filter sorted arr for elements there twice 
    const duplicate = arr.filter((num, i, a) => a.indexOf(num) !== a.lastIndexOf(num));
    result = duplicate[0];
  } else {
    result = unique[0];
  };
  return result;
};

// SOLTUION 2: timed out, need to not use a loop
function duplicateOrUnique(arr) {
    const sorted = arr.sort((a, b) => a - b);
    let length = sorted.length;
    let n = sorted[length-1];
    let duplicate, unique;
  
    // eval type of arr based on length
    if(length === n+1) {
      duplicate = true;
    } else if (length === 2*n-1) {
      unique = true;
    };
  
    if(duplicate) {
      return sorted.filter((num, i, a) => a.indexOf(num) !== a.lastIndexOf(num))[0];
    } else if(unique) {
      return sorted.filter((num, i, a) => a.indexOf(num) === a.lastIndexOf(num))[0];
    };
};

console.log(duplicateOrUnique([3,6,9,2,5,8,1,4,8,7]), 8);
console.log(duplicateOrUnique([1,2,3,1,2,3,4]), 4);
