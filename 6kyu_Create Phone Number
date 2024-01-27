/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns 
a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/

// METHOD 1: use template literals
let createPhoneNumber = nums => {
  if (nums.length === 10) {
    return `(${nums[0]}${nums[1]}${nums[2]}) ${nums[3]}${nums[4]}${nums[5]}-${nums[6]}${nums[7]}${nums[8]}${nums[9]}`
  }
  return 'That is the wrong number of digits for a phone number'
}

// METHOD 2: create a format and use a for loop
let createPhoneNumber = nums => {
  // create format
  let format = '(xxx) xxx-xxxx';
  
  // for loop to update format/mutate the string
  for(let i = 0; i < nums.length; i++) {
    format = format.replace('x', nums[i])
  }
  return format
}

