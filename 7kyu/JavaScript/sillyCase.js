/*
https://www.codewars.com/kata/552ab0a4db0236ff1a00017a/train/javascript
Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

eg: foobar == fooBAR

If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

sillycase("brian")  
//         --^-- midpoint  
//         bri    first half (lower-cased)  
//            AN second half (upper-cased)  
*/

// SOLUTION 1
function sillycase(str) {
  // get index that's halfway. if it's odd, add 1 to "round up"
  let index = str.length % 2 === 0 ? (str.length - 1)/2 : ((str.length - 1)/2)+1;
  // map string to lowercase if index is below or uppercase if its above
  return str.split('')
    .map((e, i) => i < index ? e.toLowerCase() : e.toUpperCase())
    // join to string and return
    .join('');
};

console.log(sillycase('brian'), 'briAN');
console.log(sillycase('luke'), 'luKE');

// SOLUTION 2: easier way to get the index
function sillycase(str) {
  let index = Math.ceil(str.length/2);
  return str.split('')
    .map((e, i) => i < index ? e.toLowerCase() : e.toUpperCase())
    .join('');
};
