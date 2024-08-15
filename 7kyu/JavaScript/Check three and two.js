/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

// solution one
function checkThreeAndTwo(array) {
  // Create an object with counts of each element
  let count = {};
  array.forEach(x => {
     if(count[x]) {
       count[x] += 1
     } else {
       count[x] = 1
     }
  })
  // if count  has two elements one with the value of three and one with the value of two, return true. Else return false.
  if(Object.keys(count).length === 2) {
    let sortedCounts = Object.values(count).sort()
    if (sortedCounts[0] == 2 && sortedCounts[1] == 3 ) {
      return true
    }
  }
  return false
}

// solution two
function checkThreeAndTwo(array) {
  let count = {};
  array.forEach(x => count[x] ?  count[x] += 1 : count[x] = 1);
  
  let sortedCounts = Object.values(count).sort()
  let countLength = Object.keys(count).length
  
  return (countLength === 2 && sortedCounts[0] == 2 && sortedCounts[1] == 3) ? true : false
}
