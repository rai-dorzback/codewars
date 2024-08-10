/*
Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :

[1,2,3,4]
the function should return :

[1,4,3,8]
*/

// Prep
// p: array of numbers
// r: array where each second number is doubled

// method 1: arrow function, ternary operator
const doubleEveryOther = (arr) => arr.map((num, i) => i % 2 !== 0 ? num * 2 : num);

// method 2: long way but more readable
function doubleEveryOther(arr) {
    // map array
    return arr.map((num, i) => {
        // if index is odd (second number is 1st index), double num
        if (i % 2 !== 0) {
            return num * 2
        // else leave as is
        } else {
            return num
        }
    });
};

// e
doubleEveryOther([2, 5, 9, 16]) // [2, 10, 9, 32]