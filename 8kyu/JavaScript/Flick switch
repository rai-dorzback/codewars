/*
Task
Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.

Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
*/

// METHOD 1
let flickSwitch = a => {
  // create a boolean for flick that starts as true
  let flick = true
  
  // for each element
  return a.map(e => {
    // if that element is 'flick', the boolean switches (gets reassigned to be not what it was previously)
    if (e === 'flick') {
      return flick = !flick;
    } else return flick;
  })
}

// METHOD 2: concise version of method 1
let flickSwitch = a => {
  let flick = true
  return a.map(e => e === 'flick'? flick = !flick : flick)
}

// METHOD 3: most concise version of the same thing
let flickSwitch = a => (flick = true, a.map(e => e === 'flick'? flick = !flick : flick))
