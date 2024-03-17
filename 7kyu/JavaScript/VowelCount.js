/*
eturn the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

/* METHOD 1: For in loop */
function getCount(str) {
  // variable to store # of vowels
  let numVowels = 0;
  
  // turn str to array
  str = str.split('')
  
  // for each item in array, check if it is a vowel. if it is, add 1 to numOfVowels
  for(let char of str) {
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      numVowels += 1
    }
  }
  return numVowels;
}

/* METHOD 2: Using filter array method */
function getCount(str) {
  // turn string into array. filter string to create new array of characters that are vowels and return the length of that array
  return str.split('').filter(char => 'aeiouAEIOU'.includes(char)).length;
}
