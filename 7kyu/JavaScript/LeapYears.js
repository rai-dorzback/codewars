/*
In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

Years divisible by 4 are leap years,
but years divisible by 100 are not leap years,
but years divisible by 400 are leap years.
Tested years are in range 1600 ≤ year ≤ 4000.
*/

// METHOD 1
const isLeapYear = year => year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 === 0 ? true : false;

// METHOD 2 (combine some of the statements)
const isLeapYear = year => (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0 ? true : false;

// METHOD 3: readable version of method 2
const isLeapYear = year => {
  if ( (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) return true;
  else return false;
}
