/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// METHOD 1
const duplicateCount = s => {
  // object to hold the counts of each letter
  counts = {}
  // split string into an array, iterate through it
  s.toLowerCase().split('')
  .forEach(char => {
    // if the element is a property of counts, add 1 to it. if not, set it to 1
    char in counts ? counts[char] += 1 : counts[char] = 1;
  });
  // count of how many characters are duplicates
  let duplicates = 0;
  
  // iterate through keys, if the value is more than 1, add 1 to duplicates
  for(key in counts) {
    if (counts[key] > 1) {
      duplicates += 1
    };
  };
  return duplicates;
}

// METHOD 2
const duplicateCount = s => {
  let duplicates = [];
  s.toLowerCase().split('')
  .forEach((e, i, a) => {
    // if the current index is not the last index of the element (if there are duplicates of it) AND it is not already in the duplicates array, add it to the array
    if(i !== a.lastIndexOf(e) && duplicates.indexOf(e) === -1) {
      duplicates.push(e)
    };
  });
  // return the length of the array, which is equivalent to the count of how many duplicate letters there are
  return duplicates.length
};

const string = 'abcdeed'
duplicateCount(string) // output: 2

