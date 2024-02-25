/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

// METHOD 1
let highAndLow = n => {
  let sorted = n.split(' ').map(n => +n).sort((a, b) => b - a)
  return `${sorted[0]} ${sorted[sorted.length - 1]}`
}

// METHOD 2
let highAndLow = n => {
  if (n.split(' ').length === 1) {
    return `${n} ${n}`;
  } else {
    let sorted = n.split(' ').map(n => +n).sort((a, b) => b - a)
    let max = sorted[0]
    let min = sorted[sorted.length - 1]
    return `${max} ${min}`
  }
}
