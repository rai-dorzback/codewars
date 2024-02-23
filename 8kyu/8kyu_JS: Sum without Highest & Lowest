/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
*/

// METHOD 1
let sumArray = a => {
  if (a !== null && a !== undefined) {
    a.sort((a, b) => b - a)
    a.pop()
    a.shift()
    return a.reduce((a, b) => a + b, 0)
  } else return 0
}

// METHOD 2: using slice instead of pop and shift
let sumArray = a => {
  if (a !== null && a !== undefined) {
    return a.sort((a, b) => b - a).slice(1, -1).reduce((a, b) => a + b, 0)
  } else return 0
}

// METHOD 3: all on one line
let sumArray = a => (a !== null && a !== undefined) ? a.sort((a, b) => b - a).slice(1, -1).reduce((a, b) => a + b, 0) : 0

// METHOD 4: instead of error handling by checking for null or undefined, can just check if a is truthy
sumArray = a => a ? a.sort((a, b) => b - a).slice(1, -1).reduce((a, b) => a + b, 0) : 0
