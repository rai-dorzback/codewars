/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

// string
// return string w 13 letters after it
function rot13(message){
    // alpha arr
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let res = '';
    // loop thru msg
    for(let char of message) {
      let i;
        // if lowercase character
      if(char === char.toLowerCase()) {
        // find index of letter in alpha
        i = alpha.indexOf(char)
        // if it was a letter
        if(i !== -1) {
        // add that item + 13 to result
          res += alpha[(i+13)%26]
        } else {
        // otherwise add the character to result as is
          res += char
        }
        // same thing for uppercase
      } else if (char === char.toUpperCase()) {
        i = upperAlpha.indexOf(char)
        if(i !== -1) {
          res += upperAlpha[(i+13)%26]
        } else {
          res += char
        }
      }
    }
    return res
  }


  
  rot13('test') // grfg
  rot13('hi') // uv