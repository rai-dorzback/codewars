/*
https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.
*/

// SOLUTION 1. O(1)
function getRealFloor(n) {
  if(n < 13 && n > 0) {
    return n - 1;
  } else if (n >= 13){
    return n - 2;
  } else {
    return n;
  };
};

// SOLUTION 2: same but use ternary
const getRealFloor = n => (n < 13 && n > 0) ? n - 1 : n >= 13 ? n - 2 : n;

// SOLUTION 3: same as 2, but different conditions so you don't need to use and
const getRealFloor = n => n <= 0 ? n : n >= 13 ? n - 2 : n - 1;

// SOLUTION 4: same as solution 1, using different conditionals and shortened syntax
function getRealFloor(n) {
  if(n <= 0) return n;
  else if (n >= 13) return n - 2;
  else return n - 1;
};
