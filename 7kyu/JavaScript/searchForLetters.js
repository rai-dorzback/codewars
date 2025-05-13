/*
https://www.codewars.com/kata/52dbae61ca039685460001ae/train/javascript
Create a function which accepts one arbitrary string as an argument, and return a string of length 26.

The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.

For instance:

"a   **&  cZ"  =>  "10100000000000000000000001"
"aaaaaaa79345675"  =>  "10000000000000000000000000"
"&%#*"  =>  "00000000000000000000000000"
*/

// time complexity: O(n). space complexity: O(1)
// str -> str of 0s and 1s. len 26
// if a letter appears anywhere in the string, put a 1 for that place in the result
function change(str){
  // str of alpha
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  // arr of 26 0s
  const arr26 = new Array(26).fill(0);
  // str to lower case - loop
  for(const char of str.toLowerCase()) {
    // if current char is letter
    if(alpha.includes(char)) {
      // find index of letter in alpha
      let i = alpha.indexOf(char)
      // replace that index's 0 with a 1
      arr26[i] = 1
    };
  };
  return arr26.join('');
};

console.log(change('&$a90b2xz'), '11000000000000000000000101');
console.log(change('&a **&  bZ'), '11000000000000000000000001');