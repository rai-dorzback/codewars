/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

// method 1: readable
function getAverage(x) {
  const sum = x.reduce((a, b) => a + b, 0)
  const mean = sum/x.length
  return Math.floor(mean)
};

// method 2: arrow function, more concise less readable
const getAverage = x => Math.floor(x.reduce((a, b) => a + b, 0)/x.length);
