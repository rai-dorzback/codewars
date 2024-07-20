/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
*/

function order(s){
  // split str into array of words
  return s.split(' ')
    // use sort function on the array so that if the number we extracted is lower, it goes in front
    .sort((a, b) => {
    // get num out of each word
    let aNum = a.split('').filter(e => Number(e))
    let bNum = b.split('').filter(e => Number(e))
    return aNum - bNum
  })
  // turn back into string and return reordered string
  .join(' ')
}
