/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/

const getSum = (a, b) => {
  // sort a and b in ascending order
  let sortedNums = [a,b].sort((a, b) => a - b);
  // store array
  let range = [];
  // loop from small num to larger num
  for(let i = sortedNums[0]; i <= sortedNums[1]; i++) {
    // add each num to range
    range.push(i);
  };
  return a === b ? a : range.reduce((a, b) => a + b, 0);
};
