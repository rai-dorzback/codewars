/*
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
*/

// solution 1
function include(arr, item){
  return arr.includes(item)
}

// solution 2
function include(arr, item){
  return arr.filter(e => e === item).length < 1 ? false : true
}
