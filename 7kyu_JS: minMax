/*
STORY
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't 
give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy 
it for the lowest possible price and sell it at the highest.
TASK
Write a function that returns both the minimum and maximum number of the given list/array.
EXAMPLES (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
*/
let minMax = arr => {
  // find minimum & maximum using reduce
  let min = arr.reduce((prev, current) => Math.min(prev, current))
  let max = arr.reduce((prev, current) => Math.max(prev, current))
  return [min, max]
}
