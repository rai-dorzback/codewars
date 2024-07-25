/*
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
*/
// METHOD 1: forEach loop
let strCount = (s, l) => {  
  let count = 0
  s.split('').forEach(letter => {
    if (letter === l) {
      count += 1
    }
  })
  return count
}

// METHOD 2: filter to create a new array of only that letter, then return the length (count of how many)
let strCount = (s, l) => s.split('').filter(letter => letter === l).length
