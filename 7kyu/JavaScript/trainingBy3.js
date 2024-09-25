/*
A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

Given a series of digits as a string, determine if the number represented by the string is divisible by three.
*/

// solution 1: use for loop to iterate over string and add to the sum
function divisibleByThree(str){
  let sum = 0
  for (let num of str) {
    sum += +num
  }
  return sum % 3 === 0
}

// solution 2: find sum by turning string into array, then mapping and reducing it
function divisibleByThree(str){
  let sum = str.split('').map(e => +e).reduce((a, b) => a + b, 0)
  return sum % 3 === 0
}

// s3 // more concise by using spread syntax instead of split method on string
function divisibleByThree(str){
  let sum = [...str].map(e => +e).reduce((a, b) => a + b, 0)
  return sum % 3 === 0
}
