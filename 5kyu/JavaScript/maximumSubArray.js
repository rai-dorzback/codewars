/*
https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

// Kadane's algorithm (https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/#)
// arr of nums -> max sum of subsequence in arr (subsequence has to be next to each ohter in index)
const maxSequence = arr => {
    // if array is empty, return 0
    if(arr.length < 1){
      return 0
    }
    // initialize maxSum and where last subarray ended with first element
    let maxSum = arr[0];
    let maxEnding = arr[0];
    // loop thru array starting at index 1
    for(let i = 1; i < arr.length; i++) {
        // compare the current number + where sequence ended with current Num. whichever is greater is new max ending
        maxEnding = Math.max(maxEnding + arr[i], arr[i])
        // compare maxEnding with current maxSum. whichever is greater is maxSum
        maxSum = Math.max(maxEnding, maxSum);
    };
    // if maxSum is negative then return 0 else return maxSum
    return maxSum < 0 ? 0 : maxSum;
};
  
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSequence([-2, -4, -5]), 0);
console.log(maxSequence([-2, 3, 8, -10, 2, 8, 3, 2, -1]), 15);