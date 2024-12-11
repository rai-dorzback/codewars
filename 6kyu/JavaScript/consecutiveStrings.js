/*
https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

Note
consecutive strings : follow one after another without an interruption
*/

// arr of strings, int
function longestConsec(arr, k) {
    if(k <= 0 || k > arr.length ) return '';
    let longest = '';
    // loop thru arr
    for(let i = 0; i < arr.length; i++) {
        // slice i-(i+k) - slice is exclusive
        const slice = arr.slice(i, i+k)
            // concatenate words
            .join('');
        // if this sliced word is longer than the existing longest word, reassign
        if(slice.length > longest.length) {
            longest = slice;
        }
    }
    return longest;
}

// return longest string of k consecutive strings
console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2), "folingtrashy")
console.log(longestConsec([], 2), undefined)