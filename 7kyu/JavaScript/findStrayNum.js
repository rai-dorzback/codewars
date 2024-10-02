/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

// solution 1
const stray = a => {
  // have count object
  let count = {}
  // loop thru array, add count to object
  a.forEach(num => {
    if(count[num]) {
      count[num] += 1
    } else {
      count[num] = 1
    }
  })
  // loop through count
  for(key in count) {
    // return whichever has a count of 1
    if(count[key] === 1) {
      return +key
    }
  }
}

// solution 2: use set, findIndex, findLastIndex
const stray = a => {
  // get set
  let unique = [...new Set(a)]
  let res;
  // loop thru set
  unique.forEach(n => {
    // findIndex and findLastIndex of both nums in original array
    let firstIndex = a.findIndex(e => e === n)
    let lastIndex = a.findLastIndex(e => e === n)
    // if the results are the same, return that number
    if(firstIndex === lastIndex) {
      res = n
    }
  })
  return res
}

// solution 3
const stray = a => {
  // sort array
  a = a.sort((a, b) => a - b)
  // if the first item isn't the same as the second, it is the unique one. 
  if(a[0] !== a[1]) {
    return a[0]
    // else return last item in array, it is the unique one
  } else {
    return a[a.length-1]
  }
}

// solution 4: same as solution 1 but use ternary expression in the foreach
const stray = a => {
  let count = {}
  a.forEach(num => count[num] ? count[num] += 1 : count[num] = 1)
  for(key in count) {
    if(count[key] === 1) {
      return +key
    }
  }
}

// solution 5: same as solution 3 but use ternary expression instead. more concise, less readable
const stray = a => {
  a = a.sort((a, b) => a - b)
  return a[0] !== a[1] ? a[0] : a[a.length-1]
}

// solution 6
const stray = a => {
  let max = Math.max(...a) // get max num
  let min = Math.min(...a) // get min num
  // filter the array to just nums that are the max. if its length is 1, there is only one of it in the array. return that num. else return the other
  return a.filter(e => e === max).length === 1 ? max : min;
}

// solution 7
// find the number that has the same first and last index in the array
const stray = a => a.find(num => a.indexOf(num) === a.lastIndexOf(num))
