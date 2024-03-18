/*
The number 198 has the property that 198 = 11 + 99 + 88, i.e., if each of its digits is concatenated twice and then summed, the result will be the original number. It turns out that 198 is the only number with this property. However, the property can be generalized so that each digit is concatenated n times and then summed.

Examples
original number =2997 , n=3
2997 = 222+999+999+777 and here each digit is concatenated three times.

original number=-2997 , n=3

-2997 = -222-999-999-777 and here each digit is concatenated three times.
Task
Write a function named checkConcatenatedSum that tests if a number has this generalized property.
*/

// METHOD 1
const checkConcatenatedSum = (int, n) => {
  // split integer into array of each individual digit
  const concatenatedSum = String(Math.abs(int)).split('')
  // map array so that each element is that digit n number of times
  .map((e, i, a) => {
    let str = '';
    for(let i=1; i <= n; i++) {
      str += e
    }
    // convert back to integer
    return +str
  })
  .reduce((sum, current) => sum + current, 0);
  // return concatenatedSum
  return concatenatedSum === Math.abs(int) ? true : false;
};

// METHOD 2: same as method 1 but a bit more concise
const checkConcatenatedSum = (int, n) => String(Math.abs(int)).split('')
  .map(e => {
      let str = '';
      for(let i=1; i <= n; i++) {
        str += e
      }
      // convert back to integer
      return +str
    })
    .reduce((sum, current) => sum + current, 0) === Math.abs(int);

// METHOD 3: MOST CONCISE
const checkConcatenatedSum = (int, n) => {
  int = Math.abs(int)
  return String(int).split('')
    .map(e => e.repeat(n)) // INSTEAD OF FOR LOOP, THERE IS A REPEAT STRING METHOD
    .reduce((sum, c) => sum + +c, 0) === int;
}
