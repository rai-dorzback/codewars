/*
https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

function initializeNames(name){
    const nameArr = name.split(' ');
    if(nameArr.length > 2) {
      let result = [];
      // loop through name
      for(let i = 0; i < nameArr.length; i++) {
        // if index is not 1 or nameArr.length-1, shorten it
        if(i !== 0 && i !== nameArr.length-1) {
          result.push(`${nameArr[i][0]}.`)
        } else {
          result.push(nameArr[i]);
        };
      };
      return result.join(' ');
    } else 
      return name;
};