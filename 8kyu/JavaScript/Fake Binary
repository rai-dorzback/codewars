/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
// METHOD 1: for loop
let fakeBin = str => {
  // split string into an array
  str = str.split('')
  // place to store new string
  let binary = ''
  // loop through array
  for (let num of str) {
    // if that item is less than 5, change it to zero. if it is greater than 5, change it to one 
    num < 5 ? binary += '0' : binary += '1'
  }
  return binary
}

let string = '1078392903'
fakeBin(string)

// METHOD 2: map array
let fakeBin = str => str.split('').map(num => num < 5 ? 0 : 1).join('')
