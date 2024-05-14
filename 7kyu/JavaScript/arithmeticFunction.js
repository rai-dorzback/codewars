/*
a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Try to do it without using if statements!
*/

// method 1: use object and bracket notation
const arithmetic = (a, b, op) => {
  let math = {
    'add'     : a + b,
    'subtract': a - b,
    'multiply': a * b,
    'divide'  : a / b
  };
  return math[op];
};

// method 2: ternary
const arithmetic = (a, b, op) => op === 'add' ? a + b : op === 'subtract' ? a - b : op === 'multiply' ? a * b : a / b;
