/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

// METHOD 1: use a new array literal
let reverseWords = s => {
  let words = s.split(' ')
  let newString = []
  for (word of words) {
    newString.push(word.split('').reverse().join(''))
  }
  return newString.join(' ')
}

// METHOD 2: use map
let reverseWords = s => s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
