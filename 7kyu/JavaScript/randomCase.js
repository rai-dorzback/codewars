/*
https://www.codewars.com/kata/57073869924f34185100036d/train/javascript
Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

A few examples:

randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == "lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"

randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"
Notes:

This function will work within the basic ASCII character set to make this kata easier - so no need to make the function multibyte safe.

The letters MUST be selected randomly - filters are set to make sure there is no cheating!
*/

// SOLUTION 1
function randomCase(x) {
  let arr = x.split('');
  // loop through/map characters in string
  return arr.map(letter => {
    // get random number
    const randomNum = Math.random()
    // if above 0.5, uppercase else lowercase that letter
    if(randomNum > 0.5) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    };
  }).join('');
};

// SOLUTION 2: arrow function, all on one line. more concise, less readable
const randomCase = x => x.split('')
    .map(letter => Math.random() > 0.5 ? letter.toUpperCase() : letter.toLowerCase())
    .join('');
