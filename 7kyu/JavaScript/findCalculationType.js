// https://www.codewars.com/kata/5aca48db188ab3558e0030fa/train/javascript

// SOLUTION 1
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

// SOLUTION 2
const calcType = (a, b, res) =>
    ({[a + b]: `addition`,
      [a - b]: `subtraction`,
      [a * b]: `multiplication`,
      [a / b]: `division`
    })[res];