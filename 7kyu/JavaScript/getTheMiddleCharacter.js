/*
You are going to be given a word. Your job is to return the middle character 
of the word. If the word's length is odd, return the middle character. If the 
word's length is even, return the middle 2 characters.

#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"

#Input
A word (string) of length 0 < str < 1000 (In javascript you may get slightly 
more than 1000 in some test cases due to an error in the test cases). You do 
not need to test for this. This is only here to tell you that you do not need 
to worry about your solution timing out.

#Output
The middle character(s) of the word represented as a string.
*/

// method 1
const getMiddle = s => {
  // take the length of the string minus 1 (because index is zero based) and divide in half to find the middle letter
  let index = (s.length - 1)/2;
  // if that index is an integer/whole number, just return that character
  if (Number.isInteger(index)) {
    return s[index];
    // if not, return a string between the rounded down index and rounded up index (+1 so its inclusive)
  } else return s.substring(Math.floor(index), Math.ceil(index)+1);
};

// method 2: same as 1 but using ternary
const getMiddle = s => {
  let index = (s.length - 1)/2;
  return Number.isInteger(index) ? s[index] : s.substring(Math.floor(index), Math.ceil(index)+1);
};

// method 3: actually don't even need the if statement, can just use the substring and it'll work for both cases
const getMiddle = s => {
  let index = (s.length - 1)/2;
  return s.substring(Math.floor(index), Math.ceil(index)+1);
};
