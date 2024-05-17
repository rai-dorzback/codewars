/*
Fix the function
I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?
*/

// original code that i am fixing
function addFive(num) {
  var total = num + 5
  return num
}

// fixed code v1
function addFive(num) {
  var total = num + 5
  return total
}

// fixed code v2
const addFive = num => num + 5;
