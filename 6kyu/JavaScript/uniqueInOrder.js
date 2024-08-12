/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// solution 1
const uniqueInOrder = x => {
    let result = [];
    // check if string or array. if string, turn to array
    if (typeof x === 'string') {
        x = x.split('')
    }
    // if array is only 1 element, return that elemnt in an array
    if(x.length <= 1) {
      return x
    }
    // loop thru array
    x.forEach((e, i, arr) => {
      // for each item, check if the previous item is the same
      if(e !== arr[i-1]) {
        // if it is not the same,add to result array
        result.push(e)
      }
    })
    return result
};

// solution 2: you can iterate through a string, so use a regular for loop
// to loop thru the string or array. this way you don't have to check if its a string at all
function unique(x) {
    let result = [], last;
    // loop thru iterable
    for(let i = 0; i < x.length; i++) {
        // reassign variable for previous element
        last = x[i-1];
        // if current element isn't the same as the last one
        if(x[i] !== last) {
            // add to result array
            result.push(x[i])
        };
    };
    return result;
};

// Examples
uniqueInOrder('AAAABBBCCDAABBB') // ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD') // ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3]) // [1,2,3]
uniqueInOrder([2,2,3,3, 7, 8, 9, 9, 2]) // [2, 3, 7, 8, 9, 2]
uniqueInOrder(['A']) // ['A']