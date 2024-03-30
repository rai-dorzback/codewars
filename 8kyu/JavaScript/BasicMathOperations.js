/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

// METHOD 1
const basicOp = (op, val1, val2) => op === '+' ? val1 + val2 : op === '-' ? val1 - val2 : op === '*' ? val1 * val2 : op === '/' ? val1 / val2 : 'That is not a valid operation';

// METHOD 2: use eval() which will evaluate an equation that's in string form
const basicOp = (op, val1, val2) => eval(val1+op+val2);
