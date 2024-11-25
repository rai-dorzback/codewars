/*
https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript
Are the numbers in order?
In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

For example:

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.
*/

// SOLUTION 1
// arr of int -> boolean of if asc order
function inAscOrder(arr) {
    // sort copy of arr in asc
    const sortedArr = [...arr].sort((a, b) => a - b);
    // compare both arrays
    // if they are the same, return true else false
    return arr.every((int, i) => int === sortedArr[i]);
}

// SOLUTION 2
function inAscOrder(arr) {
    // loop thru arr start at 1
    for(let i = 1; i < arr.length; i++) {
        // if prev int > current int, return false
        if(arr[i-1] > arr[i]) {
            return false;
        };
    };
    return true;
};

console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]), 'false')
console.log(inAscOrder([1,2,7,10]), 'true')
console.log(inAscOrder([1, 2, 10, 8, -3]), 'false')
console.log(inAscOrder([]), 'true')
console.log(inAscOrder([122]), 'true')