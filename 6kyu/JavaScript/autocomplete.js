/*
https://www.codewars.com/kata/5389864ec72ce03383000484/train/javascript
It's time to create an autocomplete function! Yay!

The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

Example:

autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
For this kata, the dictionary will always be a valid array of strings. Please return all results in the order given in the dictionary, even if they're not always alphabetical. The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.

For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as "Apple" and "airport" in their original cases.

Important note:

Any input that is NOT a letter should be treated as if it is not there. For example, an input of "$%^" should be treated as "" and an input of "ab*&1cd" should be treated as "abcd".
*/

// SOLUTION 1
const alpha = 'abcdefghijklmnopqrstuvwxyz';
function autocomplete(input, dict){
  let result = [];
  // error handle input - remove special characters
  input = input.split('').filter(char => alpha.includes(char.toLowerCase())).join('');
  // dict - loop
  for(const word of dict) {
    // if the word begins with input (case insensitive) and results have less than 5 items in it, add to result array
    if(word.toLowerCase().startsWith(input.toLowerCase()) && result.length < 5) {
      result.push(word);
    };
  };
  return result;
};

console.log(autocomplete('ai%', ['airplane','Airport','apple','ball']), ['airplane','Airport'])

// SOLUTION 2: filter dictionary itself
function autocomplete(input, dict){
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  input = input.split('').filter(char => alpha.includes(char.toLowerCase())).join('');
  const result = dict.filter(word => word.toLowerCase().startsWith(input.toLowerCase())).slice(0, 5);
  return result;
};


// SOLUTION 3: use regex to filter input, all on one line
const autocomplete = (input, dict) => dict.filter(word => word.toLowerCase().startsWith(input.replace(/[^a-z]/g, "").toLowerCase())).slice(0, 5);;

// SOLUTION 4: same as 3 but more readable
const autocomplete = (input, dict) => {
  input = input.replace(/[^a-z]/g, "");
  const result = dict.filter(word => word.toLowerCase().startsWith(input.toLowerCase())).slice(0, 5);
  return result;
};