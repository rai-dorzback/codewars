/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

const countSheep = n => {
  // string to store result
  let res = '';
  // for loop to iterate from 1 to n
  for(let i = 1; i <= n; i++) {
    // concatenate to result
    res += `${i} sheep...`;
  };
  // return result
  return res;
};
