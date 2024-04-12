/*
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.
 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

// METHOD 1
const wave = s => {
    let waveArray = []; // place to store the array
    
    // loop through string
    for(let i = 0; i < s.length; i++) {
    
        // if the current character is an empty space, continue onto next iteration
        if (s[i] == ' ') {
            continue;
        }
        // capitalize letter at index, then add the rest of the string to it
        let capitalizedSubstring = `${s[i].toUpperCase()}${s.substring(i+1)}`
    
        // if that string is equal in length the the original string
        if(capitalizedSubstring.length === s.length) {
            // add it to the waveArray array
            waveArray.push(capitalizedSubstring)

        // if that string is shorter than the original
        } else if (capitalizedSubstring.length < s.length) {
            // concatenate the beginning of the string before the capitalized letter
            let fullString = `${s.substring(0, i)}${capitalizedSubstring}`;
            waveArray.push(fullString);
        }
    }
    return waveArray;
  }
  
// METHOD 2
const wave = s => [...s]
  // map each char in string
  .map((e, i) => {
    // if the current element is not an empty space
    if (e !== ' ') {
     // take a slice of the string until the current index, then make the current index uppercase, and concatenate the rest of it with another slice
    return `${s.slice(0, i)}${s[i].toUpperCase()}${s.slice(i+1)
  }`}
    })
  // filter to make sure none of the elements are undefined (which they may be because of the if statement in our map)
  .filter(x => x !== undefined);
