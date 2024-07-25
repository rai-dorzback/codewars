/*
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.
*/

// METHOD 1: for loop, ternary expression
String.prototype.toAlternatingCase = function () {
  let swapCase = ''
  // for each character in the string, if that character is uppercase add the lowercase version to swapCase & vice versa
  for (let char of this) {
    // check if character is uppercase by comparing it to char.toUpperCase()
    char === char.toUpperCase() ? swapCase += char.toLowerCase() : swapCase += char.toUpperCase()
  }
  return swapCase
}

'HELLO worLd'.toAlternatingCase()

// METHOD 2: map array method
String.prototype.toAlternatingCase = function () {
  return this.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')
}

'helloooo YOU'.toAlternatingCase()
