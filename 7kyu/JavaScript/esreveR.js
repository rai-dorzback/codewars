/*
https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/

// SOLUTION 1
const reverse = arr => {
  let reversed = [];
  for(let i = arr.length-1; i >= 0; i--) {
    reversed.push(arr[i]);
  };
  return reversed;
};

// SOLUTION 2
const reverse = arr => {
  let reversed = [];
  while(arr.length > 0) {
   reversed.push(arr.pop()) 
  };
  return reversed;
};
