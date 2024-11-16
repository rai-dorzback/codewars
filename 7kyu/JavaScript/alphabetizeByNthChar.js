/*
https://www.codewars.com/kata/54eea36b7f914221eb000e2f/train/javascript
Write a function that accepts two parameters, i) a string (containing a list of words) and ii) an integer (n). The function should alphabetize the list based on the nth letter of each word.

The letters should be compared case-insensitive. If both letters are the same, order them normally (lexicographically), again, case-insensitive.

Example:

function sortIt('bid, zag', 2) //=> 'zag, bid'
The length of all words provided in the list will be >= n. The format will be "x, x, x". In Haskell you'll get a list of Strings instead.
*/

// string: words separated by comma and space & integer -> string sorted by nth letter
function sortIt(list, n) {
  // split str into array 
  return list.split(', ')
  // sort by element[n]
    .sort((a, b) => a[n-1] > b[n-1] ? 1 : -1)
  // join into string
    .join(', ');
};

console.log(sortIt('hello, goodbye, world', 2), ': hello, goodbye, world') 
console.log(sortIt('cat, dog, eel, bee', 3), ': bee, dog, eel, cat') 
console.log(sortIt("Paul von Oberstein, Karl Robert Steinmetz, Ernst von Eisenach, Reinhard von Lohengramm, Arthur von Streit, Adalbert von Fahrenheit, Fritz Josef Bittenfeld, Theodor von Lucke, Helmut Rennenkampf, Wolfgang Mittermeyer, Ulrich Kesler", 7), ': Arthur von Streit, Helmut Rennenkampf, Ulrich Kesler, Fritz Josef Bittenfeld, Wolfgang Mittermeyer, Karl Robert Steinmetz, Paul von Oberstein, Adalbert von Fahrenheit, Reinhard von Lohengramm, Theodor von Lucke, Ernst von Eisenach')
