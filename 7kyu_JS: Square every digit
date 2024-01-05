/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.
*/

/* METHOD 1: map method!! */
// split number into array of numbers so can square each number individually, use map function to create new array with squared values
let squareDigits = num => Number(num.toString().split('').map(digit => digit ** 2).join(''))

squareDigits(3212)

/* METHOD 2: forEach loop, add to squaredNum */
let squareDigits = num => {
  // variable to store result
  let squaredNum = ''
  
  // split number into array of numbers so can square each number individually
  num = num.toString().split('')
  
  // for each number, turn it into an integer and square it
  num.forEach(digit => {
    // turn into integer
    digit = Number(digit)
    
    // square number
    let square = digit ** 2
    
    // add number to string
    squaredNum += square
  })
  
  // turn back into number and return
  return Number(squaredNum)
};
