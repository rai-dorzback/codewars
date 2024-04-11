/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
const XO = s => {
  s = s.toLowerCase().split('');
  
  // get counts by filtering an array for that value and taking the length of it
  numX = s.filter(e => e === 'x').length;
  numO = s.filter(e => e === 'o').length;
  return numX === numO;
};
