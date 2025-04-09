// https://www.codewars.com/kata/5aca48db188ab3558e0030fa/train/javascript
function calcType(a, b, res) {
    if(a + b === res) {
      return 'addition';
    } else if(a - b === res) {
      return 'subtraction';
    } else if(a * b === res) {
      return 'multiplication';
    } else if (a / b === res) {
      return 'division';
    };
};