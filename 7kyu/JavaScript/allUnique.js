/*
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
*/

// SOLUTION 1: compare str length to set size
const hasUniqueChars = str => new Set(str).size === str.length ? true : false;

// SOLUTION 2: use a hashmap
// str -> case sensitive and ASCII
// true if only unique char, false otherwise
// linear complexity
function hasUniqueChars(str){
  // count obj
  let count = {};
  // add chars/frequencies to count
  for(const char of str) {
    count[char] = count[char] + 1 || 1
  }
  // loop thru obj
  for(const char in count) {
   // if any value is greater than 1, return false
    if(count[char] > 1) {
      return false
    }
  }
  // if none returned false, return true
  return true
}

hasUniqueChars('  nAa') // false bc there are two spaces ' ' ' '
hasUniqueChars('abc') // true
hasUniqueChars('aA') // true
hasUniqueChars('++-') // false bc 2 +
hasUniqueChars('') // false
