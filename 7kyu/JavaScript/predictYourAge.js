/*
https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
*/

// SOLUTION 1
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    // put ages in arr
    let ages = [age1,age2,age3,age4,age5,age6,age7,age8]
    // square each number
    ages = ages.map(age => age * age);
    // add nums together
    const sum = ages.reduce((sum, c) => sum + c, 0);
    // get square root divided by 2
    const res = Math.sqrt(sum)/2
    // round down
    return Math.floor(res)
  }

// SOLUTION 2: use spread syntax for ages, make arrow function, put everything on one line. more concise, less readable
const predictAge = (...ages) => Math.floor(
    Math.sqrt(
      ages.map(age => age * age)
          .reduce((sum, c) => sum+c, 0))/2);