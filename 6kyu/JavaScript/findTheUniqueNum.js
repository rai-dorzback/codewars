/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

// METHOD 1
function findUniq(arr) {
  // object to hold counts of each number
  counts = {}
  arr.forEach(e => {
    // if the element is already a key in counts, then add 1 to it
    if(e in counts) {
      counts[e] += 1;
      // else start the count at 1
    } else {
      counts[e] = 1;
    }
  })
  
  // loop through keys in counts
  for(key in counts) {
    // if the value to that key is 1
    if(counts[key] === 1) {
      // return that key as a number
      return +key
    }
  }
}

// METHOD 2
// find a number where the first and last index for it are the same, therefore meaning it only exists in the array once
const findUniq = arr => arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
