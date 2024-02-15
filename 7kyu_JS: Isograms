/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

// METHOD 1: if the length of the string is equal to the length of all unique characters in the string return true
let isIsogram = s => {
  s = s.toLowerCase()
  if (s.split('').length === [...new Set(s)].length) return true
  else return false
}

// METHOD 2: more reqadable and using ternary expression
let isIsogram = s => {
  s = s.toLowerCase()
  let unique = [...new Set(s)]
  
  return s.split('').length === unique.length ? true : false
}

// METHOD 3: method 1 and 2 just on one line
let isIsogram = s => (s.toLowerCase().split('').length) === [...new Set(s.toLowerCase())].length ? true : false
