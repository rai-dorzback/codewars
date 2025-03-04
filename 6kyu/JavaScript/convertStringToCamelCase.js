/*
https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

// SOLUTION 1: O(n)
const delimiters = '-_';
const toCamelCase = str => str.split('')
    // if prev char was - or _ current char uppercase
    .map((char, i, a) => delimiters.includes(a[i-1]) ? char.toUpperCase() : char)
    // filter out delimiters
    .filter(char => !delimiters.includes(char))
    // join into string
    .join('');

console.log(toCamelCase('hi-there'), 'hiThere');
console.log(toCamelCase('Hi-there'), 'HiThere');
console.log(toCamelCase(''), '');

// SOLUTION 2: O(n). use .replaceAll() instead of .filter()
const delimiters = '-_';
const toCamelCase = str => str.split('')
    .map((char, i, a) => delimiters.includes(a[i-1]) ? char.toUpperCase() : char)
    .join('')
    .replaceAll(delimiters[0], '')
    .replaceAll(delimiters[1], '');
