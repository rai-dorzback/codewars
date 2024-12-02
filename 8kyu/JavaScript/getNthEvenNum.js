/*
https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
The input will not be 0.
*/

// SOLUTION 1
// list starts at 0 and counts up
function nthEven(n){
    let evensList = []
    // loop thru nums 0 thru n*2
    for(let i = 0; i < n*2; i++) {
        if(i % 2 === 0) {
            evensList.push(i);
        }
    }
//     return last num on evensList (evensList.pop())
  return evensList.pop();
  }

// SOLUTION 2
const nthEven = n => n*2 -2;