/*
Given a non-empty array of non-empty integer arrays, multiply the contents of each nested array and return the smallest total.

Example
input = [
  [1, 5],
  [2],
  [-1, -3]
]

result = 2
*/

// method 1: forEach, reduce, and push
const smallestProduct = a => {
  // store products
  let products = [];
  // for each array nested in the array
  a.forEach(array => {
    // use reduce to multiply all items in array
    let product = array.reduce((a, b) => a * b, 1);
    // add each product to array of products
    products.push(product);
  });
  // sort in ascending order and return first item (samllest)
  return products.sort((a, b) => a - b)[0];
};

// method 2: map original array to a reduce of each nested array, sort and return smallest num
const smallestProduct = a => a.map(x => x.reduce((a, b) => a * b, 1)).sort((a, b) => a - b)[0];

// method 3: use Math.min and spread syntax to find minimum
const smallestProduct = a => Math.min(...a.map(x => x.reduce((a, b) => a * b, 1)));
