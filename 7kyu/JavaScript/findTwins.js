/*
https://www.codewars.com/kata/5834315e06f227a6ac000099/train/javascript
Agent 47, you have a new task! Among citizens of the city X are hidden 2 dangerous criminal twins. Your task is to identify them and eliminate!

Given an array of integers, your task is to find two same numbers and return one of them, for example in array [2, 3, 6, 34, 7, 8, 2] answer is 2.

If there are no twins in the city - return None or the equivalent in the language that you are using.
*/

// SOLUTION 1
function elimination(arr){
    let counts = {};
    // count how many of each num
    for(const num of arr) {
      counts[num] ? counts[num]++ : counts[num] = 1;
    };
    let duplicate = null;
    // loop through counts to find duplicate
    for(const key in counts) {
      if(counts[key] === 2) {
        duplicate = +key;
      };
    };
    return duplicate;
};

// SOLUTION 2
function elimination(arr){
    // sort array
    const sorted = arr.sort((a, b) => a - b);
    // find any consecutive numbers. filter for any number that is equal to the prior number
    const result = sorted.filter((e, i, a) => e === a[i-1])[0] || null;
    return result;
};

// SOLUTION 3: solution 2 but on one line
const elimination = arr => arr.sort((a, b) => a - b)
  .filter((e, i, a) => e === a[i-1])[0] || null;