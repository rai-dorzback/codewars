/*
Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26].
*/

// method 1
class CaesarCipher {
  constructor(shift) {
    this.shift = shift,
    this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  }
  
  encode(str) {
    // make string uppercase & split into array
    return str.toUpperCase().split('')
      // map array
      .map((letter, i) => {
        // find the index of the current element/character
        let currentIndex = this.alpha.findIndex(e => e === letter)
        // if it is not -1 (meaning it is an alphabet letter)
        if(currentIndex !== -1) {
          // then map that element to alpha[(index + 5)%26] to account for if the index goes above 25
          return this.alpha[(currentIndex+this.shift)%26]
        } else {
          return letter
        }
      // join back into string
    }).join('')
  };
  
  decode(str) {
    // split string into array
    return str.split('').map((letter, i) => {
      let currentIndex = this.alpha.findIndex(e => e === letter);
      if(currentIndex !== -1) {
        return this.alpha[(currentIndex + 26 - this.shift)%26]
      } else {
        return letter
      }
    }).join('');
  };
};

// method 2: more concise, using arrow functions
class CaesarCipher {
  constructor(shift) {
    this.shift = shift,
    this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  };
  
  encode(str) {
    return str.toUpperCase().split('').map((letter, i) => {
        let currentIndex = this.alpha.findIndex(e => e === letter);
        return currentIndex !== -1 ? this.alpha[(currentIndex+this.shift)%26] : letter;
    }).join('');
  };
  
  decode(str) {
    return str.split('').map((letter, i) => {
      let currentIndex = this.alpha.findIndex(e => e === letter);
      return currentIndex !== -1 ? this.alpha[(currentIndex + 26 - this.shift)%26] : letter;
    }).join('');
  };
};
