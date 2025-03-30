/*
https://www.codewars.com/kata/55b95c76e08bd5eef100001e/train/javascript
*/

const one = "anane";
const two = "adak";

const countArara = n => n === 1 ? one : n === 2 ? two : `${two} ${countArara(n-2)}`;

// SOLUTION 2
const countArara2 = n => {
    if(n === 1) {
      return one
    } else if (n === 2) {
      return two
    } else {
      return `${two} ${countArara(n-2)}`;
    };
};
  
console.log(countArara(12), 'adak adak adak adak adak adak adak adak adak adak')
console.log(countArara(13), 'adak adak adak adak adak adak adak adak adak adak anane')

// every number will start with adak, the language adds two together as many times and then for an odd number there would be one anane at the end