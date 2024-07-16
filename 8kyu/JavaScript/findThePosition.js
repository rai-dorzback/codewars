/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')

function position(l){
  const pos = alpha.indexOf(l.toLowerCase())+1;
  return `Position of alphabet: ${pos}`
};
