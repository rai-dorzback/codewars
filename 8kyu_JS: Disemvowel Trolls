/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.
*/

// METHOD 1
let disemvowel = s => s.split('').filter(letter => !'AaEeIiOoUu'.split('').includes(letter)).join('')

// METHOD 2
let disemvowel = str => {
  let vowels = 'aeiouAEIOU'
  let newString = ''
  for (let char of str) {
    if (!vowels.includes(char)) {
      newString += char
    }
  }
  return newString

}
