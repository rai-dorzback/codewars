/*
You need to cook pancakes, but you are very hungry. As known, one needs to fry a pancake 
one minute on each side. What is the minimum time you need to cook n pancakes, if you can 
put on the frying pan only m pancakes at a time? n and m are positive integers between 1 and 1000.
*/

// method 1
const cookPancakes = (numPancakes, numSlots) => {
  // if there are less pancakes than slots per pan, it will be two minutes
  if(numPancakes < numSlots) return 2;
  // otherwise each pancakes will take 2 minutes and then divide that by the number of slots
  else return Math.ceil(numPancakes * 2 / numSlots)
}

// method 2: method 1 but on one line using ternary operator
const cookPancakes = (numPancakes, numSlots) => numPancakes < numSlots ? 2 : Math.ceil(numPancakes * 2 / numSlots);
