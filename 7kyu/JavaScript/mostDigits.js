/*
https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(arr){
  let maxLen = 0;
  let res = 0;
  for(const num of arr) {
    let currLen = String(num).length;
    if(currLen > maxLen) {
      maxLen = currLen;
      res = num;
    };
  };
  return res;
};
