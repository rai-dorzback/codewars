/*
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8 (1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/

function high(x){
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('') // list of alphabet and the number of points 
  const words = x.split(' ') // split string into array of words
  // map array of words to # of points
  const arrOfPoints = words.map((word, i) => word
    // split each word into its letters
    .split('')
       // map word to letters' points (index + 1)
     .map(letter => (alpha.findIndex(e => e === letter)+1))
       // add up points of each word
       .reduce((a, b) => a + b, 0))
  // find index of highest number
  const highestScoringPoints = Math.max(...arrOfPoints)
  // return highest scoring word as string
  const indexOfHighestWord = arrOfPoints.findIndex(e => e === highestScoringPoints)
  return words[indexOfHighestWord]
}
