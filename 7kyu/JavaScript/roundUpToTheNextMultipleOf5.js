/*
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/

// method 1
function roundToNext5(n){
  // check if n is divisible by 5
  if(n%5===0) {
    // if yes, return n
    return n
  // else keep adding 1 to the number until it is
  } else {
    // while n isn't divisible by 5
    while(n%5 !== 0) {
      // add 1 to it
      n += 1
    }
    // return n
    return n
  }
};

// method 2: you actaully don't even need the if statement
function roundToNext5(n){
  // while n isn't divisible by 5
  while(n%5 !== 0) {
    // add 1 to it until it is
      n += 1
    }
  //return n
  return n
};
