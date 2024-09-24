/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
*/


function alphabetPosition(text) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')

  // make text lowercase
  text = text.toLowerCase()

  // store result
  let res = ''
  
  // loop through characters in string
  for(let char of text) {
    // check that character is a letter
    if(alpha.includes(char)) {
      // calculate the letter's number using findIndex
      let num = alpha.findIndex((e) => e === char) + 1
      // add number and space to to result string
     res += `${num} `
    }
  }
  // return the result and trim any extra spaces
  return res.trim()
};
