/*
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
*/

// METHOD 1
const reverse = str => str.split(' ').reverse().join(' ');

// METHOD 2
function reverse(str) {
  let res = []
  str = str.split(' ')
  for(let i = str.length-1; i >= 0; i--) {
    res.push(str[i])
  }
  return res.join(' ')
}
