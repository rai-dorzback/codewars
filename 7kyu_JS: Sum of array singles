/*
In this Kata, you will be given an array of numbers in which two numbers occur once 
and the rest occur only twice. Your task will be to return the sum of the numbers that 
occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, 
and their sum is 15. Every other number occurs twice.
*/

// METHOD 1:
let repeats = a => {
  // create a new array of only numbers that occur once. first sort array, then remove doubles by removing item next to it
  a.sort((a, b) => a - b)
  
  let doubles = []
  let unique = []
  
  let i = 0
  for (let num of a) {
    // find numbers that have doubles
    if (num === a[i+1]) {
      doubles.push(num)
    }
    i++
    
    // if the number is not in the doubles list
    if (!doubles.includes(num)) {
      unique.push(num)
    }
  }
  return unique.reduce((a, b) => a + b, 0)
}

repeats([4,5,7,5,4,8]) // return 15

// METHOD 2
let repeats = a => {
  // object to hold counts of each number
  counts = {}
  
  // count each num
  for (num of a) {
    if (num in counts) {
      counts[num] += 1
    } else {
      counts[num] = 1
    }
  }
  
  // create array of all singles by looping through counts object
  let unique = []
  for (num in counts) {
    if (counts[num] === 1) {
      unique.push(+num)
    }
  }
  
  // sum using reduce
  return unique.reduce((a, b) => a + b, 0)
}

// METHOD 3
let repeats = a => a
  // filter array to only include items where the first and last index of that item are the same (meaning there is only one of them)
  .filter(n => a.indexOf(n) === a.lastIndexOf(n))
  .reduce((a, b) => a + b, 0)
