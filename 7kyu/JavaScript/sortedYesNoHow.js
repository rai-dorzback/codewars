/*
https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/
// SOLUTION 1
function isSortedAndHow(arr) {
  // sort copies of array in asc and desc
  const asc = [...arr].sort((a, b) => a - b);
  const desc = [...arr].sort((a, b) => b - a);
  if(arr.every((e, i) => e === asc[i])) {
    return "yes, ascending";
  } else if(arr.every((e, i) => e === desc[i])) {
    return "yes, descending";
  } else {
    return "no";
  };
};

console.log(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');

// SOLUTION 2: same as 1, just uses ternary operators
function isSortedAndHow(arr) {
  const asc = [...arr].sort((a, b) => a - b);
  const desc = [...arr].sort((a, b) => b - a);
  return arr.every((e, i) => e === asc[i]) ? "yes, ascending" : arr.every((e, i) => e === desc[i]) ? "yes, descending" : "no";
};

// SOLUTION 3: O(n) - linear time complexity
function isSortedAndHow(arr) {
  // booleans for asc or desc
  let asc = true, desc = true;
  // loop through arr
  for(let i = 1; i < arr.length; i++) {
    // if current num is bigger than the previous, it's not desc
    if(arr[i] > arr[i-1]) {
      desc = false;
    // if current num is smalelr than the previous, it's not asc
    } else if (arr[i] < arr[i-1]) {
      asc = false;
    };
  };
  return asc ? "yes, ascending" : desc ? "yes, descending" : "no";
};
