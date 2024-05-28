/*
The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

Example
Input:
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

Output:
'Vatsan took his dog for a spin'
*/

// method 1
const sentence = a => {
    // map objects into nested arrays
  return a.map(obj => {
    for(const [key, value] of Object.entries(obj)) {
      return [+key, value]
    };
  })
    // sort nested ararys by value
    .sort((a, b) => a[0] - b[0])
    // map array to just be the word
    .map(arr => arr[1])
    // join array into string sentence of just the values separated by spaces
    .join(' ');
};

// method 1.2: no comments, using implicit return of arrow function
const sentence = a => a.map(obj => {
    for(const [key, value] of Object.entries(obj)) {
      return [+key, value]
    };
  }).sort((a, b) => a[0] - b[0]).map(arr => arr[1]).join(' ');

// method 2: sort using Object.keys(), map using Object.values()
const sentence = a => a.sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
  .map(obj => Object.values(obj)[0])
  .join(' ');
