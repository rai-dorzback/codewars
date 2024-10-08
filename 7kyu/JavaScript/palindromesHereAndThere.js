/*
An array is given with palindromic and non-palindromic numbers. A palindromic number is a number that is the same from a reversed order. For example 122 is not a palindromic number, but 202 is one.

Your task is to write a function that returns an array with only 1s and 0s, where all palindromic numbers are replaced with a 1 and all non-palindromic numbers are replaced with a 0.

For example:

[101, 2, 85, 33, 14014]  ==>  [1, 1, 0, 1, 0]
[45, 21, 303, 56]        ==>  [0, 0, 1, 0]
*/

// pass in arr of nums
// return arr -> 1 if is palindrome, 0 if not
function convertPalindromes(nums) {
  // map nums, evaluate which are palindromes
  return nums.map(num => {
    num = String(num)
    numReversed = num.split('').reverse().join('')
    if(num === numReversed) {
      // palindrome -> 1
      return 1
      // not -> 0
    } else {
      return 0 
    }
  })
};

convertPalindromes([45, 21, 303, 909]) // [0, 0, 1, 1]
convertPalindromes([2, 3, 4, 5]) // [1, 1, 1, 1]
convertPalindromes([20, 15, 9]) // [0, 0, 1]
convertPalindromes([]) // []

// SOLUTION 2: use ternary instead of if statement, all on one line. more concise, less readable
const convertPalindromes = nums => nums.map(num => String(num) === String(num).split('').reverse().join('') ? 1 : 0)
