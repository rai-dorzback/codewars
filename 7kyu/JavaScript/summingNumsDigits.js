/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

// method 1
const sumDigits = n => {
  // turn number into array of strings of each digit
  numArray = String(n).split('');
  // if the first item in the number array is a negative
  if (numArray[0] === '-') {
    // remove negative from array to get absolute values
    numArray.splice(0, 1)
  };
  // use reduce to sum each digit
  return numArray.reduce((a, b) => +a + +b, 0);
};

// method 2: use Math.abs, split, and reduce
const sumDigits = n => String(Math.abs(n)).split('').reduce((a, b) => +a + +b, 0);
