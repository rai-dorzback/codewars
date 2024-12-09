/*
https://www.codewars.com/kata/5276c18121e20900c0000235/train/javascript
Background:
You're working in a number zoo, and it seems that one of the numbers has gone missing!

Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.

In case the zoo loses another number, they want your program to work regardless of how many numbers there are in total.

Task:
Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any number including n). Return this missing number.

Note: huge lists will be tested.

Examples:
[1, 3, 4]  =>  2
[1, 2, 3]  =>  4
[4, 2, 3]  =>  1
*/

// input -> arr of nums
function findNumber(arr) {
    // figure out how many numbers there should be
    const arrLength = arr.length+1
    // use Gauss's trick to get sum of contiguous nums from 1-arrLength
    const expectedSum = (arrLength * (arrLength+1)) / 2
    // reduce to get actual sum
    const actualSum = arr.reduce((sum, curr) => sum + curr, 0);
    // difference between expected and actual will be the missing number
    const difference = expectedSum - actualSum
    return difference;
};
// there wil be 1 num missing to make it an arr of consecutive nums from 1 to n

console.log(findNumber([13,11,10,3,2,1,4,5,6,9,7,8]), 12)
console.log(findNumber([1,2], 3))
console.log(findNumber([1,3,4,5,6,7,8]), 2)
console.log(findNumber([7,8,1,2,4,5,6]), 3)