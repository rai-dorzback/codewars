/*
https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

const encryptWord = word => {
  const firstChar = word.charCodeAt(0);
  let res;
  switch(word.length) {
      case 0: return '';
      case 1: return firstChar;
      case 2: res = [firstChar, word[1]];
      case 3: res = [firstChar, word[2], word[1]]; break;
      default: res = [firstChar, word.slice(-1), word.slice(2, -1), word[1]]; break;
  };
  return res.join('');
};

const encryptThis = text => text.split(' ').map(word => encryptWord(word)).join(' ');
