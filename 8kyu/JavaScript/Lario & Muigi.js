/*
The pipes are correct when each pipe after the first is 1 more than the previous one.

Task
Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
*/

function pipeFix(numbers){
  let fixedList = []
  
  // use for loop to loop through. initial value will be equal to the 
  // value of the first number in the list
  for(let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    fixedList.push(i)
  }
  return fixedList
}
