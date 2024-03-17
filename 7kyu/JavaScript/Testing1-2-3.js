/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)
[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

// METHOD 1: forEach and splice
const number = arr => {
  // loop thru list forEach
  arr.forEach((item, index, _) => {
    // use splice to replace the item with its new item
    arr.splice(index, 1, `${index + 1}: ${item}`)
  })
  return arr
}

// METHOD 2: map
const number = arr => arr.map((item, i, _) => `${i + 1}: ${item}`)

let list = ['mermaids', 'fairies', 'witches', 'wizards', 'sirens']
console.log(number(list))
