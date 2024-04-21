/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

// method 1
const duplicateEncode = w => {
  // turn string to array  
  return w.toLowerCase().split('')
    // map array  
    .map((e, i, a) => {
      // get counts of each element by filtering them and taking the length
      let count = a.filter(x => x == e).length
      return count > 1 ? ')' : '('
    }).join('');
};

// method 2: same but all on one line
const duplicateEncode = w => w.toLowerCase().split('').map((e, i, a) => a.filter(x => x == e).length > 1 ? ')' : '(').join('');

duplicateEncode("din") // "((("
duplicateEncode("recede") // "()()()"
duplicateEncode("Success") // ")())())"
duplicateEncode("(( @")// "))((" 
