/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(n) {  
  // sort array from min to max
  n = n.sort((a, b) => a - b);
  // add up the 2 smallest numbers (first two items in sorted array) and return
  return n[0] + n[1];
};
