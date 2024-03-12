/*
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge 
them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where 
arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. 
If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. 
Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
*/

// METHOD 1: merge using sperad operator, sort, make unique array using forEach
let mergeArrays = (arr1, arr2) => {
    // merge arrays using spread operator and sort them
    let merged = [...arr1, ...arr2].sort((a, b) => a - b)
    
    let unique = []
    
    // create new array of unique elements from the merged and sorted array
    merged.forEach(element => {
      if (!unique.includes(element)) unique.push(element)
    })
  return unique
  }

// METHOD 2: use a Set as a set can only have unique elements, concatenate arrays using spread operator 
// and put the set itself in an array using the spread operator then sort in ascending order
let mergeArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2])].sort((a, b) => a -b)

// METHOD 3: same as method 1 except make unique array using regular for loop
let mergeArrays = (arr1, arr2) => {
    // merge arrays using spread operator and sort them
    let merged = [...arr1, ...arr2].sort((a, b) => a - b)

    // create new array of unique elements from the merged and sorted array
    let unique = []

    for (let i = 0; i < merged.length; i++) {
      if(!unique.includes(merged[i])) unique.push(merged[i]);
    }
    return unique
  }
  
  mergeArrays([1, 3, 5, 7], [10, 8, 6, 5])
