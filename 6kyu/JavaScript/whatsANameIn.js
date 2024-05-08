/*
What's in a name?
...Or rather, what's a name in? For us, a particular string is where we are looking for a name.

Task
Write a function, taking two strings in parameter, that tests whether or not the first string contains all of the letters of the second string, in order.

The function should return true if that is the case, and else false. Letter comparison should be case-INsensitive.

Examples
    "Across the rivers", "chris" --> true
      ^      ^  ^^   ^
      c      h  ri   s
                
    Contains all of the letters in "chris", in order.
----------------------------------------------------------
    "Next to a lake", "chris" --> false

    Contains none of the letters in "chris".
--------------------------------------------------------------------
    "Under a sea", "chris" --> false
         ^   ^
         r   s

    Contains only some of the letters in "chris".
--------------------------------------------------------------------
    "A crew that boards the ship", "chris" --> false
       cr    h              s i
       cr                h  s i  
       c     h      r       s i
                 ...
          
    Contains all of the letters in "chris", but not in order.
--------------------------------------------------------------------
    "A live son", "Allison" --> false
     ^ ^^   ^^^
     A li   son
            
    Contains all of the correct letters in "Allison", in order, but not enough of all of them (missing an 'l').
*/

// method 1
const nameInStr = (str, name) => {
  name = name.toLowerCase().split('') // turn name into array
  // turn string into array and loop through it
  str.toLowerCase().split('').forEach(letter => {
    // if the letter is the first letter in name
    if (letter === name[0]) {
      // remove first letter from name
      name.shift();
    }
  });
  // if name is empty now (used all the letters in the correct order), return true else false
  return name.length === 0;
};

// method 2
const nameInStr = (str, name) => {
  // make str and name lowercase
  name = name.toLowerCase();
  str = str.toLowerCase();
  
  let i = 0;
  // loop through string
  for (let letter of str) {
    // if letter is the same as name[i]
    if(letter === name[i]) {
      i++ // add to the index. so will only add if the letter matches
    };
  };
  // if i is the same as the name length (we added 1 each time the character was correct), return true else false
  return i === name.length;
};
