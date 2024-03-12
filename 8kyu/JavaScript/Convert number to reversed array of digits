/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

// METHOD 1
const digitize = n => {
  // turn n into string
  n += ''
  
  // split n into array and reverse it
  n = n.split('').reverse()
  
  // for each item in array, turn into a number
  for(let i = 0; i < n.length; i++) {
    n[i] = Number(n[i])
  }
  return n
}

// METHOD 2
const digitize = n => String(n).split('').map(Number).reverse()
