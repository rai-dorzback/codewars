/*
In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/

// solution 1
function twoHighest(arr) {
  // sort only unique values descending
  const sorted = [...new Set(arr)].sort((a, b) => b - a)
  // if more than 2 values, return first and second elements
  if(sorted.length > 2) {
    return [sorted[0], sorted[1]]
    // else return whole array
  } else {
    return sorted
  }
}

twoHighest([4, 10, 10, 9]) // [10, 9]
twoHighest([1, 1, 1]) // [1]
twoHighest([]) // []

// solution 2: same as solution 1 but use ternary
function twoHighest(arr) {
  const sorted = [...new Set(arr)].sort((a, b) => b - a)
  return sorted.length > 2 ? [sorted[0], sorted[1]] : sorted;
}

// solution 3: use slice instead of array indexing, then you don't need the if statement about array length
const twoHighest = arr => [...new Set(arr)]
  .sort((a, b) => b - a)
  .slice(0, 2);
