/*
https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str == "" return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
("123456987654", 6) --> "234561876549"
("123456987653", 6) --> "234561356789"
("66443875", 4) --> "44668753"
("66443875", 8) --> "64438756"
("664438769", 8) --> "67834466"
("123456779", 8) --> "23456771"
("", 8) --> ""
("123456779", 0) --> "" 
("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".
*/

// O(n) linear complexity
function revrot(str, sz) {
  // check edge cases
  if(sz <= 0 || str == "" || str.length < sz) {
    return "";
  };
  
  // str -> arr
  const arr = str.split('').map(n => +n);
  
  // store result
  let result = [];
  
  for(let i = 0; i < arr.length; i+=sz) {
    // create subarray/chunk
    let chunk = arr.slice(i, i+sz);
    // check if div by 2
    const isEven = chunk.reduce((a, b) => a + b, 0) % 2 === 0;
    // if sum of chunk div by 2, reverse
    if(isEven) {
      result.push(chunk.reverse());
    } else {
        // else rotate left by 1 
        let firstNum = chunk.shift();
        chunk.push(firstNum);
        result.push(chunk);
    }
  };
  if(result[result.length-1].length < sz) {
    result.pop();
  };
  // flatten to single arr and join chunks into single string
  return result.flat().join('');
};

console.log(revrot("733049910872815764", 5), "330479108928157");
