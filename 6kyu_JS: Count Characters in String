/*
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

// METHOD 1: create object literal, use forEach() loop and split() to loop through string as array, if else statement to check object
function count(string) {
  let count = {};
  // turn string into array, for each character in the array, if that character is not already a key in the object count, create a key and make the value 1. if it does exist, add 1 to that key's value pair
  string.split('').forEach(char => {
    if (`${char}` in count) {
      count[`${char}`] += 1;
    } else {
      count[`${char}`] = 1;
    }
  })
  return count;
}

// METHOD 2: more concise version of method 1 (arrow functions, ternary expressions)
let count = string => {
  let count = {};
  string.split('').forEach(char => char in count ? count[char] += 1 : count[char] = 1)
  return count;
}
