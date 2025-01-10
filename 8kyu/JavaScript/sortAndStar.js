/*
https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/
// solution 1
const twoSort = s => s.sort()[0].split('').join('***');

// solution 2 - same thing but more readable because break down each piece into variables
function twoSort(s) {
  const sorted = s.sort();
  const firstVal = sorted[0];
  const result = firstVal.split('').join('***');
  return result;
};

const result = twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"], 'b***i***t***c***o***i***n')
console.log(result)
