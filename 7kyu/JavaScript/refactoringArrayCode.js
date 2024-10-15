/*
function withoutLast(arr) {
  // Fix it
  arr.pop(); // removes the last element
  return arr;
}
*/

// SOLUTION 1
function withoutLast(arr) {
  return arr.slice(0, arr.length-1); // removes the last element
  
}

// SOLUTION 2
const withoutLast = arr => arr.slice(0, -1);

// SOLUTION 3
function withoutLast(arr) {
  arr = [...arr]
  arr.pop();
  return arr;
}
