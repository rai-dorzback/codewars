/*
https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript
In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- We sort by highest frequency to lowest frequency.
-- If two elements have same frequency, we sort by increasing value.
*/

// SOLUTION 1
// arr of nums -> arr sorted by frequency
// higher frequency > lower frequency
// if they have the same freq, sort them ascending
function solve(arr){
    // count obj
    let freq = {};
    
    // arr - loop, count freq of nums
    for(const num of arr) {
        freq[num] = freq[num] + 1 || 1
    }
    // sort by freq of count obj
    return arr.sort((a, b) => {
        // if 2 freq are same, sort those 2 ascending
        if(freq[a] === freq[b]) {
            return a - b
        }
        return freq[b] - freq[a]
    })
}

console.log(solve([2,3,5,3,7,9,5,3,7]), [3,3,3,5,5,7,7,2,9])

// SOLUTION 2 - no comments, more concise using ternary within the sort method
const solve = arr => {
    let freq = {};
    for(const num of arr) {
        freq[num] = freq[num] + 1 || 1
    }
    return arr.sort((a, b) => freq[a] === freq[b] ? a - b : freq[b] - freq[a])
}