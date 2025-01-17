/*
https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript
Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
*/

const left = {
  "w": 4,
  "p": 3,
  "b": 2,
  "s": 1
};

const right = {
  "m": 4,
  "q": 3,
  "d": 2,
  "z": 1
};

function alphabetWar(str) {
  let leftPoints = 0, rightPoints = 0;
  
  for(const char of str) {
    if(left.hasOwnProperty(char)) {
      leftPoints += left[char];
    } else if(right.hasOwnProperty(char)) {
      rightPoints += right[char];
    };
  };
  return leftPoints > rightPoints ?  'Left side wins!' : rightPoints > leftPoints ? 'Right side wins!' : "Let's fight again!";
};
