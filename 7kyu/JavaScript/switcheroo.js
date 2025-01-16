/*
https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

// SOLUTION 1
// str of letters abc. switch any As with Bs and any Bs with As
function switcheroo(str){
  // str to arr
  let arr = str.split('');
  // map char in str
  // if a, map to b and vice versa
  arr = arr.map(x => x === 'a' ? 'b' : x === 'b' ? 'a' : 'c');
  // join arr to str
  return arr.join('');
};

// SOLUTION 2: same as solution 1 but using arrow function/all on one line
const switcheroo = str => str.split('')
    .map(x => x === 'a' ? 'b' : x === 'b' ? 'a' : 'c')
    .join('');

console.log(switcheroo('abc'), 'bac')
