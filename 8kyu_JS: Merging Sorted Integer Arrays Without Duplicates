/* 
Write a function that merges two sorted arrays into a single one. 
The arrays only contain integers. Also, the final outcome must be 
sorted and not have any duplicate.
*/

// METHOD 1: concatenate and sort array, turn it into Set to get unique values, turn back into array
let mergeArrays = (a, b) => {
  
  // remove doubles by turning it to a set, concatenate the arrays together and sort them
  let set = new Set(a.concat(b).sort((a, b) => a - b))
  
  // place to store new array
  let newArray = []
  
  // add each item from set into array
  set.forEach((i) => newArray.push(i))
  
  // return new array
  return newArray
}

mergeArrays(([2, 4, 8], [2, 4, 6]), [2, 4, 6, 8])

// METHOD 2: concat and sort array, then create unique array using forEach loop
let mergeArrays = (a, b) => {
  
  // concatenate the arrays together and sort them
  let newArray = a.concat(b).sort((a, b) => a - b)
  
  let unique = []
  // if the unique array does not include the item
  newArray.forEach((i) => {
    if (!unique.includes(i)) {
      // add item to unique array
      unique.push(i)
    }
  })
  
  // return unique array
  return unique
}

// METHOD 3: use spread operator to literally turn the set into an array
let mergeArrays = (a,b) => [...new Set(a.concat(b))].sort((a, b) => a - b)
