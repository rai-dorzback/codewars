/*
In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

See test cases for more examples.

Good luck!
*/

// SOLUTION 1
// P: arr of arr
// R: num -> # possibilites for unique arrays formed by picking 1 element from each subarray
function solve(arr) {
  // make sure each subarray has unique values
  // map to the length of each unique array
  return arr.map(subarr => [...new Set(subarr)].length)
  // multiple lengths together
    .reduce((a, b) => a * b, 1)
};

// E
solve([[1,2],[4],[5,6]]) // 4
solve([[1,2],[4,4],[5,6,6]]) // 4
solve([[1,2],[3,4],[5,6]]) // 145 146 135 136 235 236 245 246 -> 8

// SOLUTION 2: use set's size property, then you don't have to map and then reduce--more efficient, just turn the current subarray (b) into a set and get its size
function solve(arr) {
  return arr.reduce((a, b) => a * new Set(b).size, 1)
};
