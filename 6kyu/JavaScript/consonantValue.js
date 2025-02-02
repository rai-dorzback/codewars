/*
https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia c"

"zodiac" -> 26
The consonant substrings are: "z", "d" and "c" with values "z" = 26, "d" = 4 and "c" = 3. The highest is 26.

"strength" -> 57
The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
*/

// SOLUTION 1: brute force. O(n) time complexity
// str -> highest val of consonant substrings
function solve(str) {
  // alpha array (scores will be their index + 1)
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const vowels = 'aeiou';
  
  // create arr of substrings by mapping string so vowels are a space
  let substrings = [...str].map(char => vowels.includes(char) ? ' ' : char).join('');
  // split by space so we get the correct substrings together and filter out any empty strings from array
  substrings = substrings.split(' ').filter(char => char !== '');
  // map array to scores
  const scores = substrings.map(substr => {
    if(substr.length === 1) {
      return alpha.indexOf(substr)+1;
    } else {
      return substr.split('').map(char => alpha.indexOf(char)+1).reduce((a, b) => a + b, 0);
    };
  });
  return Math.max(...scores);
};

console.log(solve('zodiac'), 26);
console.log(solve('strength'), 57);

// SOLUTION 2: much much simpler, single for loop. O(n)
function solve(word) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const vowels = 'aeiou';
  let val = 0;
  let max = 0;
  // loop through word
  for(let i = 0; i < word.length; i++) {
    let letter = word[i]
    // check if vowel
    if(vowels.indexOf(letter) !== -1) {
      // reset value to 0
      val = 0;
    } else {
      // add score to value
      val += alpha.indexOf(letter) + 1
    };
    // check what is maximum
    max < val ? max = val : max = max;
  };
  return max;
};
