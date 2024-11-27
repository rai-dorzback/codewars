/*
https://www.codewars.com/kata/5239f06d20eeab9deb00049b/train/javascript
The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

Example:

fibonacci(4) // should return  [0,1,1,2]
fibonacci(-1) // should return []
*/

// SOLUTION 1
function fibonacci(n) {
    let fib = [0, 1];
    if(n < 1) { return [] } 
    else if (n === 1) { return [0] } 
    else if (n === 2) {return fib}
    for(let i = 1; i < n-1; i++) {
      let num = fib[i] + fib[i-1]
      fib.push(num)
    };
    return fib;
};
  
fibonacci(4) // [0, 1, 1, 2]

// SOLUTION 2 - loop slightly different
function fibonacci(n) {
    let fib = [0, 1];
    if(n < 1) { return [] } 
    else if (n === 1) { return [0] } 
    else if (n === 2) {return fib}
    for(let i = 2; i < n; i++) {
        let num = fib[i-2] + fib[i-1]
        fib.push(num)
    };
    return fib;
};
  
fibonacci(4) // [0, 1, 1, 2]