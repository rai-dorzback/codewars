/*
Exclamation marks series #1: Remove an exclamation mark from the end of string

Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/

// method 1
const remove = s => {
  // store last character of string in variable
  const lastChar = s.charAt(s.length-1)
  // if the last char was an exclamation
  if(lastChar === '!') {
    // slice string to everything but last character
    const result = s.split('').slice(0, s.length-1).join('')
    // return new string
    return result
  } else {
    // return original string
    return s
  }
};

// method 2: arrow function, more concise less readable
const remove = s => s.charAt(s.length-1) === '!' ? s.split('').slice(0, s.length-1).join('') : s;
