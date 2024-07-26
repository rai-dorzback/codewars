/*
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

const smash = (words) => {
//   join all array items together into a string separated by spaces
  let string = words.join(' ')
  
//   trim the string so there are no spaces at the end or beginning
  string = string.trim()
  
//   return string
  return string
};
