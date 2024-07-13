/*
TIY-FizzBuzz
In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

If a letter is a upper case consonants, replace that character with "Iron".
If a letter is a lower case consonants or a non-alpha character, do nothing to that character
If a letter is a upper case vowel, replace that character with "Iron Yard".
If a letter is a lower case vowel, replace that character with "Yard".
*/

// method 1: same as method 2 but function is all on one line using one giant ternary
const a = 'abcdefghijklmnopqrstuvwxyz'.split('')
const v = 'aeiouAEIOU'.split('')
const tiyFizzBuzz = s => s.split('').map(c => v.includes(c) ? (c === c.toUpperCase() ? 'Iron Yard' : 'Yard') : !v.includes(c) && a.includes(c.toLowerCase()) ? (c === c.toUpperCase() ? 'Iron' : c) : c).join('');

// method 2
const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
const vowels = 'aeiouAEIOU'.split('')
const tiyFizzBuzz = s => s.split('').map(c => {  
  // if char is vowel
  if(vowels.includes(c)) {
    // if vowel is uppcercase or lowercase
    if(c === c.toUpperCase()) {
      return 'Iron Yard'
    } else {
      return 'Yard'
    }
    // else if char is not a vowel but is in alphabet
  } else if (!vowels.includes(c) && alpha.includes(c.toLowerCase())) {
    if(c === c.toUpperCase()) {
      return 'Iron'
    } else {
      return c
    }
  } else {
    return c
  }
}).join('');
