/*
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]
*/

// SOLUTION 1: using built-in reverse method
const reverseList = l => l.reverse();

// SOLUTION 2: use for loop, unshift each num onto new array
function reverseList(list) {
    let result = [];
    for(const num of list) {
      result.unshift(num);
    };
    return result;
  };