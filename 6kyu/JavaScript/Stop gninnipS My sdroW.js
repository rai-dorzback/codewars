/*
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

// SOLUTION 1: O(n) linear complexity
// str of words -> str but any word.length >= 5 reversed
function spinWords(str){
  // str.split(' ')
  return str.split(' ')
  // .map()
    .map(word => {
    // if word.length >= 5 , reverse
      if(word.length >= 5) {
        return word.split('').reverse().join('')
      }
      return word
    }).join(' ')
}

// SOLUTION 2: same as 1 but all on one line/concise
const spinWords = str => str.split(' ')
  .map(word => word.length > 4 ? word.split('').reverse().join('') : word)
  .join(' ');

console.log(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw')
console.log(spinWords('This is a test'), 'This is a test')
console.log(spinWords('This is another test'), 'This is rehtona test')
