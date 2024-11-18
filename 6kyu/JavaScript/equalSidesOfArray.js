/*
https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

If there is no index that would make this happen, return -1.

For example:
Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most languages the index of an array starts at 0.

Input
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note
If you are given an array with multiple answers, return the lowest correct index.
*/

// SOLUTION 2: linear complexity
function findEvenIndex(arr) {
  let leftSum = 0;
  let rightSum = arr.reduce((sum, num) => sum+num, 0);
  
  for(let i = 0; i < arr.length; i++) {
    // if we are not on the first num
    if(i > 0) {
      // add prev number to leftSum
      leftSum += arr[i-1]; 
    }
    // subtract current number from rightSum
    rightSum -= arr[i];
    
    // if the sums are equal, return current index
    if(leftSum === rightSum) {
      return i;
    };
  };
  // if none were equal, return 1
  return -1;
};

// SOLUTION 1: brute force, quadratic complexity
// arr of int -> index where sum(numToLeft) === sum(numsToRight)
function findEvenIndex(arr) {
    var leftSideSum = 0;
    let index = -1;
    // arr - loop
    for(let i = 0; i < arr.length; i++) {
      // get sum of right side
      const rightSideSum = arr.slice(i+1, arr.length+1).reduce((a, c) => a+c, 0);
      // if both sides equal
      if(leftSideSum === rightSideSum) {
        return i;
      }  else {
        leftSideSum += arr[i];
      };
    }
    return index;
  }
  
  console.log(findEvenIndex([8, 0]), 0)
  // console.log(findEvenIndex([1,2,3,4,3,2,1]), 3)
  // console.log(findEvenIndex([1, 100, 50, -51, 1, 1]), 1)
  // console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]), 0)
  // console.log(findEvenIndex([20, 10]), -1)
