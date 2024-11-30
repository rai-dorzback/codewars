/*
https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript
Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications
*/

// SOLUTION 1
function minValue(values){
    // convert values to a set to get unique nums
    // convert set to array and sort asc order
    const sortedUniqueVals = [...new Set(values)].sort();
    // join sorted unique values into a string, turn into number
    const result = Number(sortedUniqueVals.join(''));
    // return result
    return result;
}

// SOLUTION 2: same as 1 but all on one line with an arrow function. more concise, less readable.
const minValue = values => +([...new Set(values)].sort().join(''));