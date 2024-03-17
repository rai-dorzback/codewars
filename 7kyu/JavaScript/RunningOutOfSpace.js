/*
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
*/

const spacey = arr => {
  let result = ''; // empty string to add to
  return arr.map(e => result += e) // for each element, replace it with a string where the word has been concatenated
}
