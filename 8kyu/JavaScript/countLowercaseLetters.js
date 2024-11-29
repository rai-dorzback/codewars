/*
https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript
Your task is simply to count the total number of lowercase letters in a string.

Examples
"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26
*/

function lowercaseCount(str){
    let count = 0;
    // str - loop
    for(let i = 0; i < str.length; i++) {
     const charCode = str.charCodeAt(i)
      // if charCode 97-122, add to count 
      if(charCode >= 97 && charCode <= 122) {
        count += 1;
      };
    };
    return count;
  };