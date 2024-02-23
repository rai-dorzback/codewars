/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0
*/

let sumOfDifferences = arr => arr
  // sort array
  .sort((a, b) => b - a)
  // map new array with the difference of each number and the next, or 0 if there is no next number
  .map((num, i) => num - arr[i+1] || 0)
  // use reduce to sum
  .reduce((sum, current) => sum + current, 0)

let nums = [2, 9, 20]
sumOfDifferences(nums)
