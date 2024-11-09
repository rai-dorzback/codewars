/*
Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"
*/

// seq, item -> item after given item
function nextItem(seq, item) {
  // boolean to track if we have found the item
  let found = false;
  
  // loop thru seq
  for(const element of seq) {
    // if found is true, return the element
    if(found) {return element}
    // if the element is the item, set found to true so that on the next loop we return the next element
    if(element === item) {found = true}
  }
  // if we didn't find it, return undefined
  return undefined
}

console.log(nextItem("hello there", "e")) // "l"
console.log(nextItem([1, 2, 2, 8], 2)) // 2
console.log(nextItem([1, 2, 2, 8], 3)) // undefined
console.log(nextItem([54, 2, 1, 8], 8)) // undefined
