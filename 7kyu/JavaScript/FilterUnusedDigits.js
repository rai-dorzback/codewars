/*
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:
[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.
*/

// METHOD 1
const unusedDigits = (...a) => {
  // array of all the digits
  const allDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  // create array of each individual digit in order
  a = a.join('').split('').sort((a, b) => a - b).map(e => +e);
  
  // filter allDigits to only the elements that are missing in the original array & return
  return allDigits.filter(e => !a.includes(e)).join('')
}

// METHOD 1 but more concise
const unusedDigits = (...a) => {
  const allDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return allDigits.filter(e => !a.join('').includes(e)).join('')
}

// METHOD 1 most concise
const unusedDigits = (...a) => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(e => !a.join('').includes(e)).join('')
