/*
You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.
The array is unsorted.
An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. # should return 3
*/

const findDup = a => {
  // for each element in the array
  for(let elem of a) {
    // find how many of that element are in the array and store in count variable
    let count = a.filter(e => e === elem).length
    // if there are 2 of that number
    if (count === 2) {
      return elem // return that element
    }
  }
}
