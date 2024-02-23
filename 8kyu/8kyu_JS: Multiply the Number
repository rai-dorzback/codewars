/*
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

multiply(3) == 15 // 3 * 5¹
multiply(10) == 250 // 10 * 5²
multiply(200) == 25000 // 200 * 5³
multiply(0) == 0 // 0 * 5¹
multiply(-3) == -15 // -3 * 5¹
*/

// METHOD 1
let multiply = n => {
  // find length of the number and therefore the exponent for 5. take absolute val of the number so it doesn't count a - in the length. turn to a string and split into an array, then take the length
  let exponent = Math.abs(n).toString().split('').length
  return (n) * Math.pow(5, exponent)
}

// METHOD 2: method 1 just on one line, a litle less readable this way
let multiply = n => n * Math.pow(5, Math.abs(n).toString().split('').length)

// METHOD 3: using 5 ** exponent instead of Math.pow(base, exponenet)
let multiply = n => n * (5 ** Math.abs(n).toString().split('').length)
