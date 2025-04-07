/*
https://www.codewars.com/kata/5a04133e32b8b998dc000089/train/javascript
An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included. All numbers will be greater than 0.
More examples in the test cases.

Good luck!
*/

// SOLUTION 1: quadratic complexity
// arr > arr of dom el
function solve(arr) {
    let dominant = [];
    // arr - loop
    for(let i = 0; i < arr.length; i++) {
      // make subarray of all el to right
      if(i !== arr.length-1) {
        let subarr = arr.slice(i+1); 
        // check if num is greater than every element in subarray
        const isDominant = subarr.every(el => el < arr[i]);
        // if it is, add to dominant array 
        if(isDominant) {
          dominant.push(arr[i]);
        };
      // last num in arr is always dominant
      } else {
        dominant.push(arr[i]);
      };
    };
    return dominant;
};

console.log(solve([1, 21, 4, 7, 5]), [21, 7, 5]);
console.log(solve([5,4,3,2,1]), [5,4,3,2,1]);
console.log(solve([10, 5, 8]), [10, 8]);

// SOLUTION 2: O(n^2)
function solve(arr){
    return arr.filter((e,i)=> arr.slice(i+1).every(x => x < e));
};