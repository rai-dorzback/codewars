/*
Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6]
*/

// METHOD 1: arrow function, map array method
let maps = arr => arr.map((num) => num*2)

// METHOD 2: for loop
function maps(arr){
  let doubled = []
  for(let i = 0; i < arr.length; i++) {
    doubled.push(arr[i] * 2)
  }
  return doubled
}

// METHOD 3: (method 2 but with an arrow function)
let maps = arr => {
  let doubled = []
  for(let i = 0; i < arr.length; i++) {
    doubled.push(arr[i] * 2)
  }
  return doubled
}

// METHOD 4: forEach loop (with arrow function passed in)
function maps(arr) {
  let doubled = []
  arr.forEach((num) => doubled.push(num*2))
  return doubled
}

// METHOD 5: using array.map() method
function maps(arr) {
  return arr.map((num, i, _) => num * 2)
}
