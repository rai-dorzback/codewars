/*
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
*/

// method 1
const enough = (cap, on, wait) => {
  const seatsLeft = cap - on
  return seatsLeft >= wait ? 0 : wait - seatsLeft
}

// method 2: method 1 but using ternary expression and all on one line
const enough = (cap, on, wait) => (cap-on) >= wait ? 0 : wait - (cap-on);
