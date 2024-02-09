/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

// METHOD 1
let invert = a => a.map(num => {
    // check if a number is positive or negative
    if (Math.sign(num) === 1) {
      return +`-${num}`
    } else {
      return Math.abs(num)
    }
  })

// METHOD 2: concise version of method 1
let invert = a => a.map(num => Math.sign(num) === 1 ? +`-${num}` : Math.abs(num))

// METHOD 3
let invert = a => a.map(num => -num)
