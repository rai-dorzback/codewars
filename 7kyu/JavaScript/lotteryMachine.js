/*
https://www.codewars.com/kata/5832db03d5bafb7d96000107/train/javascript
Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

Examples
"hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
"ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
"555"                   -->  "5"
*/

function lottery(str){
    const ints = '0123456789';
    // filter out letters
    str = [...str].filter(char => ints.includes(char));
    // return unique integers as a string
    const unique = [...new Set(str)].join('');
    // if no integers, "One more run!"
    return unique.length > 0 ? unique : 'One more run!';
};
  
console.log(lottery('hPrBKWDH8yc6Lt5NQZWQ'), '865');

// SOLUTION 2
const ints = '0123456789';

const lottery = str => {
  const unique = [...new Set([...str].filter(char => ints.includes(char)))].join('');
  return unique.length > 0 ? unique : 'One more run!';
};