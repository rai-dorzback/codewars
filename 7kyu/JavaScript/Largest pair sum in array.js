/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/

// p: array of numbers
// r: largest sum that can be made from 2 numbers in array (not including itself)

function largestPairSum (n) {
  // sort array descending
  n = n.sort((a, b) => b - a)
  // the first two nums will always be largest so their sum will be the largest possible sum
  return n[0] + n[1]
}

// examples
largestPairSum([10, 14, 2, 23, 19]); // 42 (23 + 19)
largestPairSum([99, 2, 2, 23, 19]); // 122 (99 + 23)
