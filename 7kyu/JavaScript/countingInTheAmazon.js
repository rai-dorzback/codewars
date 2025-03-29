/*
https://www.codewars.com/kata/55b95c76e08bd5eef100001e/train/javascript
*/

const one = "anane";
const two = "adak";

const countArara = n => n === 1 ? one : n === 2 ? two : `${two} ${countArara(n-2)}`;

