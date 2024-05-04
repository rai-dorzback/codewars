/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

// method 1
const findAverage = arr => {
  // get sum by reducing array
  let sum = arr.reduce((a, b) => a + b, 0);
  // divide sum by the length of the array
  let average = +(sum / arr.length);
  // return that average or 0 if its falsy
  return average || 0;
};

// method 2: same as method 1 but putting all on one line, not using variables. more concise, less readable
const findAverage = arr => +((arr.reduce((a, b) => a + b, 0))/arr.length) || 0;
