/*
Exclusive "or" (xor) Logical Operator
Overview
In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
Task
Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
*/

// method 1
function xor(a, b) {
  // create array of a and b
  let arr = [a, b]
  // find number of trues by filtering that array
  // if there is only one true, return true
  if(arr.filter(e => e === true).length === 1) {
    return true
  }
  // else, return false
  return false
}

// method 2
// return true if a and b are not the same, meaning one is true and one is false
const xor = (a, b) => a !== b;
