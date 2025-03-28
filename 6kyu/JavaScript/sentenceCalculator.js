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

// SOLUTION 2: massive ternary operator. more concise, way less readable
function lettersToNumbers(str) {
  let sum = 0;
  for(const char of str) {
    lowerAlpha.includes(char) ? sum += lowerAlpha.indexOf(char)+1 : upperAlpha.includes(char) ? sum += (upperAlpha.indexOf(char)+1)*2 : digits.includes(char) ? sum += +char : sum += 0;
  };
  return sum;
};