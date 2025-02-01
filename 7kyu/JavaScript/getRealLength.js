/*
https://www.codewars.com/kata/599c4b69eb8e49effa000079/train/javascript
In languages that use UTF-16 encoding for strings (JavaScript, JVM languages like Java, .NET languages like C#...), if the code point of a character is larger than 0xFFFF, it will be treated as two code units.

For example:

The code point of the emoji 🙉 (U+1F649, Hear-No-Evil Monkey) is 0x1F649.

'🙉'.length; // 2
Write a function that returns the real length of a string.

"abcd"   --> 4
"🙉"     --> 1
"😸🦌🚀" --> 3
*/

// SOLUTION 1: loop through str, count
function getRealLength(str) {
  let count = 0;  
  for(const char of str) {
    count += 1;
  };
  return count;
};

// SOLUTION 2: turn string to array, get length of array
const getRealLength = str => [...str].length;
