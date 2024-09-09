/*
Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

ORIGINAL CODE
function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number;){
    newArray.push(counter);
  }
  
  return newArray;
}
*/

// he did not increment the counter
function createArray(number){
    const newArray = [];

    for(let counter = 1; counter <= number; counter++){
        newArray.push(counter);
    }

    return newArray;
}