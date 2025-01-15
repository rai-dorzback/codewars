/*
https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

// SOLUTION 1: use reduce and filter
function divCon(arr){
  // function to sum integers
  const sumInts = a => a.reduce((a, b) => a + +b, 0);
  
  // sum of only str ints
  const sumStrInts = sumInts(arr.filter(e => typeof(e) === 'string'));
  
  // sum of non-str ints
  const sumNonStrInts = sumInts(arr.filter(e => typeof(e) === 'number'));

  // subtract strInt from nonStringInt
  const result = sumNonStrInts - sumStrInts;
  
  // return result
  return result;
};

// SOLUTION 2: use for loop
function divCon(arr){
  let strSum = 0;
  let numSum = 0;
  
  for(const x of arr) {
    typeof(x) === 'string' ? strSum += +x : numSum += x;
  };
  
  return numSum - strSum;
};

console.log(divCon([9, 3, '7', '3']), 2);
