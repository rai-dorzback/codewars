/*
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/

// SOLUTION 1
// P: s with length > 0
// R: s, every letter moved forward 10
function moveTen(s){
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
  s = s.toLowerCase()
  let res = ''
  // loop through string 
  for(let i = 0; i < s.length; i++) {
    // replace letter w/letter that's 10 forward 
    let currentLetter = s[i]
    // find index of letter in alphabet so we can figure out which one is 10 forward
    let alphaIndex = (alpha.findIndex(e => e === currentLetter)+10)%alpha.length
    res += alpha[alphaIndex]
  }
  return res
};

moveTen('c') // m
moveTen('testcase') // docdmkco
moveTen('codewars') // mynogkbc

// SOLUTION 2
function moveTen(s){
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  const down10 = 'klmnopqrstuvwxyzabcdefghij' // array of letters 10 down
  return s.toLowerCase()
    // split string into array
    .split('')
    // map string. find index of character in alphabet, use that to index down10 and find the letter to replace it with
    .map((char, i) => down10[alpha.indexOf(char)])
    // join arr into str
    .join('')
};
