/*
https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript
Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
*/

// str -> number. time complexity O(n)
function filterString(str) {
  let result = '';
  // str - loop
  for(const char of str) {
    // if it is a number
    if(!isNaN(char)) {
      // add to result
      result += char;
    };
  };
  // convert result to number and return
  return Number(result);
};

console.log(filterString('ab12dk3'), 123)