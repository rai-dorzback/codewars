/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/
// SOLUTION 1
const simpleMultiplication = n => n % 2 === 0 ? n*8 : n*9;

// SOLUTION 2
const simpleMultiplication = n => n * (n % 2 === 0 ? 8 : 9);
