/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

const findShort = str => {
  // split string into array of words
  // use Math.min and spread operator to find minumum of array
  return Math.min(...str.split(' ')
    // map array into lengths of each word
    .map(word => word.length));
};

// const findShort = str => Math.min(...str.split(' ').map(word => word.length));
