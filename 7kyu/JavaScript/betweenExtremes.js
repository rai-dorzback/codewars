/*
Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.
*/

// method 1
function betweenExtremes(n) {
    // use Math.max and spread operator to find max number in array n
    const max = Math.max(...n)
    const min = Math.min(...n)
    return max - min
};

// method 2: same as method 1 but more concise using arrow function and no variables. however, less readable
const betweenExtremes = n => Math.max(...n) - Math.min(...n);