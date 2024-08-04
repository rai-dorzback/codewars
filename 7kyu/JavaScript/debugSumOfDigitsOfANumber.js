/*
Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14

Original code
function getSumOfDigits(integer) {
    var sum = null;
    var digits =  Math.floor(integer).toString();
    for(var ix = 1; ix < digits.length; ix = sum + 1) {
      sum =+ digits[ix + 1]);
    }
    return sum;
  }
*/

function getSumOfDigits(int) {
    // instead of setting up a sum outside the for loop and looping through an array of digits, i split digits into an array and then used the reduce array method to sum the array (and converted the strings back into numbers when doing this)
    const digits = int.toString().split('')
    return digits.reduce((a, b) => +a + +b, 0)
  }

// same as above but using arrow function all on one line
getSumOfDigits = int => int.toString().split('').reduce((a, b) => +a + +b, 0);