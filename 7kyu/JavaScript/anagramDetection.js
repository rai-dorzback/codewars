/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

function isAnagram(a, b) {
  a = a.toLowerCase().split('').sort()
  b = b.toLowerCase().split('').sort()
  return a.every((char, i) => char === b[i]) && a.length === b.length
}
