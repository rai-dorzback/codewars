/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

/* METHOD 1: forEach loop used to add two characters to string */
function doubleChar(str) {
  // empty string to put result in
  let newString = ''
  
  // turn str to array
  str = str.split('')
  
  // for each character in str, add that character twice to the new string
  str.forEach(letter => {
    newString += `${letter}${letter}`
  })
  
  return newString
}

/* METHOD 2: Map array method */
function doubleChar(str) {

  // turn string into an array, use map function to change each item to that character twice, join back into string
  return str.split('').map(letter => `${letter}${letter}`).join('')
}

doubleChar('hi')
