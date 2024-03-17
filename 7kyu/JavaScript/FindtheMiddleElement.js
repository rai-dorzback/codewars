/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

// METHOD 1: findIndex 
let gimme = a => {
  // sort a copy of the array and index it to store the middleNumber in a variable
  let middleNumber = [...a].sort((a, b) => a -b)[1]
  
  return a.findIndex((num) => num === middleNumber)
}

// METHOD 2: used indexOf and shortened method 1 to one line
let gimme = a => a.indexOf([...a].sort((a, b) => a -b)[1])
