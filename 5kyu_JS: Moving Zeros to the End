/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

// METHOD 1: concatenate two arrays using spread operators. one is the array filtered to all but zeros and the second is all of the zeroes
let moveZeros = arr => [...arr.filter(e => e !== 0), ...arr.filter(e => e === 0)]

// METHOD 2: arr.sort() to put all zeros behind anything else
let moveZeros = arr => arr.sort((a, b) => b === 0 ? -1 : 1)

