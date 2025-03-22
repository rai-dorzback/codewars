/*
https://www.codewars.com/kata/559d34cb2e65e765b90000f0/train/javascript
Let's say take 2 strings, A and B, and define the similarity of the strings to be the length of the longest prefix common to both strings. For example, the similarity of strings abc and abd is 2, while the similarity of strings aaa and aaab is 3.

write a function that calculates the sum of similarities of a string S with each of it's suffixes.

Examples (input -> output):
'ababaa' -> 11
'abc' -> 3
Explanation:

In the first case, the suffixes of the string are ababaa, babaa, abaa, baa, aa and a. The similarities of each of these strings with the string ababaa are 6,0,3,0,1,1 respectively. Thus the answer is 6 + 0 + 3 + 0 + 1 + 1 = 11.

For the second case, the answer is simply 3 + 0 + 0 = 3.

Note : Each string will have at least one character - no need to check for empty strings :)
*/

function stringSuffix(str) {
    let substrings = [];
    // break down str into substrings
    // str - loop
    for(let i = 0; i < str.length; i++) {
      substrings.push(str.substring(i));
    };
    // map substrings to their sum of similarities
    substrings = substrings.map(sub => {
      let similarities = 0;
      for(let i = 0; i < sub.length; i++) {
        if(str[i] === sub[i]) {
          similarities++;
        } else {
          break;
        };
      };
      return similarities;
    });
    const sum = substrings.reduce((a, b) => a + b, 0);
    return sum;
  };
  
  console.log(stringSuffix('ababaa'), 11);
  console.log(stringSuffix('abc'), 3);
  
  /*
  ababaa -> 11
  ababaa = 6
  babaa = 0
  abaa = 3
  baa = 0
  aa = 1
  a = 1
  6 + 3 + 1 + 1 = 11
  */