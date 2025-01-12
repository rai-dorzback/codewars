/*
https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/
// solution 1
const greet = name => `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;

// solution 2 - same as 1 but more readable
const greet = name => {
  name = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return `Hello ${name}!`;
};
