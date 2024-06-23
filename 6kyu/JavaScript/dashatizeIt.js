/*
Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

Ex:

274 -> '2-7-4'
6815 -> '68-1-5'
*/

// method 1
function dashatize(num) {
  // turn num to absolute value, into string, into array
  num = String(Math.abs(num)).split('')
  // map num
  let res = num.map((digit, i, a) => {
    // turn digit back into number
    digit = +digit
    // if the current digit is odd and the index isn't 0 or num.length - 1 
    if (digit % 2 !== 0) {
      if(i !== 0 && i !== a.length-1) {
        // map it to -num-
        return `-${digit}-`
        // else if it has an index of 0 make it num-
      } else if (a.length === 1) {
        return digit
      } else if (i === 0) {
        return `${digit}-`
        // else if the index is num.length - 1 make it -num
      } else if (i === a.length-1) {
        return `-${digit}`
      }
    }
    // else just the digit
    return digit
  }).join('');
  // replace any double dashes with one dash (replaceAll method wasn't working in codewars)
  return res.split('--').join('-')
};

// METHOD 2: more concise using arrow function and ternary operator
const dashatize = num => String(Math.abs(num)).split('')
  .map((digit, i, a) => {
    digit = +digit
    if (digit % 2 !== 0) {
      return i !== 0 && i !== a.length-1 ? `-${digit}-` : a.length === 1 ? digit : i === 0 ? `${digit}-` : `-${digit}`
    }
    return digit
  }).join('').split('--').join('-');
