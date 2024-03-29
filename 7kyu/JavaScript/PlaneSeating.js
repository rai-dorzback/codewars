/*
Finding your seat on a plane is never fun, particularly for a long haul flight...
You arrive, realise again just how little leg room you get, and sort of climb into 
the seat covered in a pile of your own stuff.
To help confuse matters (although they claim in an effort to do the opposite) many 
airlines omit the letters 'I' and 'J' from their seat naming system.
the naming system consists of a number (in this case between 1-60) that denotes the 
section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). 
This number is followed by a letter, A-K with the exclusions mentioned above.
Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.
Given a seat number, your task is to return the seat location in the following format:
'2B' would return 'Front-Left'.
If the number is over 60, or the letter is not valid, return 'No Seat!!'.
*/

 // key for letters and their correspondants
  const letters = {
    'A': 'Left',
    'B': 'Left',
    'C': 'Left',
    'D': 'Middle',
    'E': 'Middle',
    'F': 'Middle',
    'G': 'Right',
    'H': 'Right',
    'K': 'Right'
  };

const planeSeat = s => {
  // map seat number into an array, turn the numbers into numbers instead of strings
  s = s.split('').map(e => +e || e);
  
  // create array where the seat number is separate from the seat letter
  let newArray = [];
  if(s.length === 3) {
    newArray.push(+`${s[0]}${s[1]}`)
    newArray.push(s[2]);
  } else {
    newArray = [...s];
  }

  // variables to store seat number and letter
  const seatNum = newArray[0];
  const seatLetter = newArray[1];

  // array to store result
  let result = [];
  if (seatNum >= 40 && seatNum <= 60) {
    result.push('Back');
  } else if (seatNum < 40 && seatNum >= 21) {
    result.push('Middle');
  } else if (seatNum <= 29) {
    result.push('Front');
  } else return 'No Seat!!';

  // if the letter is a key in the object, add its value to the result array
  if(seatLetter in letters) {
    result.push(letters[seatLetter])
  } else return 'No Seat!!';
  
  return result.join('-');
}
