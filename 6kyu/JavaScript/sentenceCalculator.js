const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
const upperAlpha = lowerAlpha.toUpperCase();
const digits = '0123456789'

function lettersToNumbers(str) {
  let sum = 0;
  // loop through sentence
  for(const char of str) {
    // find score of each character
    
    // if lowercase alpha
    if(lowerAlpha.includes(char)) {
      sum += lowerAlpha.indexOf(char)+1;
    // if uppercase alpha
    } else if (upperAlpha.includes(char)) {
      sum += (upperAlpha.indexOf(char)+1)*2;
    } else if (digits.includes(char)) {
      sum += +char
    }
  };
  return sum;
};

console.log(lettersToNumbers("I Love You"), 170);