/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
*/

// METHOD 1: push evens to new array
let removeEveryOther = arr => {
  let newArr = []
  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i])
  }
  return newArr
}

// METHOD 2: filter for items with even indexes, thereby removing every other
let removeEveryOther = arr => arr.filter((_, i) => i%2 == 0)
