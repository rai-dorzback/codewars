/*
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/

// METHOD 1
let fizzbuzz = n => {
  let arr = []
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      arr.push('FizzBuzz')
    } else if (i % 3 === 0) {
      arr.push('Fizz')
    } else if (i % 5 === 0) {
      arr.push('Buzz')
    } else {
      arr.push(i)
    }
  }
  return arr
}

// METHOD 2: use ternary expression instead of if/else statements
let fizzbuzz = n => {
  let arr = []
  for (let i = 1; i <= n; i++) {
    i % 5 === 0 && i % 3 === 0 ? arr.push('FizzBuzz') : i % 3 === 0 ? arr.push('Fizz') : i % 5 === 0 ? arr.push('Buzz') : arr.push(i)
  }
  return arr
}

// METHOD 3: while loop & ternary
let fizzbuzz = n => {
  let arr = [], i = 1;
  while (i <= n) {
    i % 5 === 0 && i % 3 === 0 ? arr.push('FizzBuzz') : i % 3 === 0 ? arr.push('Fizz') : i % 5 === 0 ? arr.push('Buzz') : arr.push(i);
    i++
  }
  return arr
}
