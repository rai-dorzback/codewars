/*
https://www.codewars.com/kata/563a8656d52a79f06c00001f/train/javascript
Given a string, determine if it's a valid identifier.

Here is the syntax for valid identifiers:
Each identifier must have at least one character.
The first character must be picked from: alpha, underscore, or dollar sign. The first character cannot be a digit.
The rest of the characters (besides the first) can be from: alpha, digit, underscore, or dollar sign. In other words, it can be any valid identifier character.
Examples of valid identifiers:
i
wo_rd
b2h
Examples of invalid identifiers:
1i
wo rd
!b2h
*/

function isValid(str) {
    const validFirstChar = 'abcdefghijklmnopqrstuvwxyz_$';
    const validChars = 'abcdefghijklmnopqrstuvwxyz_$0123456789';
    str = str.toLowerCase();
    if(str.length < 1 || !validFirstChar.includes(str[0])) {
      return false;
    };
    return str.split('').every(char => validChars.includes(char));
  };