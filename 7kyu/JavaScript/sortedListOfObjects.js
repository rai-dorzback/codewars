/*
https://www.codewars.com/kata/52705ed65de62b733f000064/train/javascript
You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).

Example
When sorted by "a", this:

[
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]
should return:

[
  {"a": 4, "b": 12},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 1, "b": 3}
]
The values will always be numbers, and the properties will always exist.
*/
const sortList = (sortBy, arr) => arr.sort((a, b) => b[sortBy] - a[sortBy]);

let list = [
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]

console.log(sortList('a', list), [
  {"a": 4, "b": 12},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 1, "b": 3}
])
