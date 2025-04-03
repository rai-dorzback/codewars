/*
https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
*/

// SOLUTION 1
// str shows _n
function bump(str){
    let numBumps = 0;
    // count how many bumps are in str
    for(const x of str) {
      if (x === 'n') {
        numBumps++;
      };
    };
    // if bumps <= 15 woohoo else car dead
    return numBumps <= 15 ? 'Woohoo!' : 'Car Dead';
};

console.log(bump('n__'), 'Woohoo!');
console.log(bump('nnnnnnnnnnnnnnnnnnnnn'), 'Car Dead');

// SOLUTION 2
function bump(x){
    // count bumps by turnin str to arr, filtering for n, taking length
    const bumps = x.split('').filter(el => el === 'n').length;
    return bumps <= 15 ? 'Woohoo!' : 'Car Dead';
};

// SOLUTION 3: all on one line
const bump = x => x.split('').filter(el => el === 'n').length <= 15 ? 'Woohoo!' : 'Car Dead';