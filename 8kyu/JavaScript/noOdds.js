/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

// solution 1
const noOdds = values => values.filter(e => e % 2 === 0);

// solution 2: same thing but OOP
class Filter {
  constructor(values) {
    this.values = values
  }
  
  noOdds() {
    return this.values.filter(e => e % 2 === 0)
  }
}

const filter = new Filter([1, 2, 3]);
filter.noOdds() // 2
