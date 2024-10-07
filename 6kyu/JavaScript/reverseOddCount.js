/*
Reverse all elements in an array that occur an odd number of times.

['a', 'a', 'b', 'c', 'c', 'd'] will output:

['a', 'a', 'd', 'c', 'c', 'b']

Since there are 2 a's and 2 c's, they will stay in place. There is 1 d and 1 b, so they will swap places.
*/

function reverseOddCount(arr){
  // object to count how many of each element
  const count = {}
  arr.forEach(e => count[e] ? count[e]++ : count[e] = 1)
  // filter -> items that appear odd # of times & reverse
  const oddElements = arr.filter(e => count[e] % 2 !== 0).reverse()
  
  let oddIndex = 0
  return arr.map(e => {
    if(count[e] % 2 !== 0) {
      return oddElements[oddIndex++]
    }
    return e
  })
}
