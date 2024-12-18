/*
https://www.codewars.com/kata/561046a9f629a8aac000001d/train/javascript
You have two arrays in this kata, every array contains unique elements only. Your task is to calculate number of elements in the first array which are also present in the second array.
*/

// SOLUTION 1: use filter method
const matchArrays = (a ,b) => a.filter(x => b.includes(x)).length;

// SOLUTION 2 - count object, loop thru combined array and count object
// O(n) - linear time
// 2 arr -> # of elements in both arrays
function matchArrays(a, b){
    // count object
    let count = {};
    const combinedArr = [...a, ...b];
    // loop thru combined arr
    for(const x of combinedArr) {
        // add each el to count object
        count[x] = count[x] + 1 || 1;
    }
    let result = 0;
    // loop thru count object
    for(const x in count) {
        // if the count is more than 1, add to result
        if(count[x] > 1) {
            result += 1;
        }
    }
    return result
};

console.log(matchArrays([1, 2, 3], [3, 4, 5]), 1) // they have number 3 in common
console.log(matchArrays(['incapsulation','OOP','array'], ['time', 'propert','paralelism','OOP']), 1)
console.log(matchArrays([1,2,3,4,5],
    [2,3,4,5,6]), 4)