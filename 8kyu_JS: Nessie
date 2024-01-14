/*
You're on your way to the market when you hear beautiful music coming from a nearby street performer. 
The notes come together like you wouln't believe as the musician puts together patterns of tunes. 
As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, 
it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "how much do people 
normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."

It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost tricked you!

There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 
foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.

Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". 
Since you are tired of being grifted by this monster, the time has come to code a solution for finding 
The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty". Your function 
should return true if you're talking with The Loch Ness Moster, false otherwise.
*/

// METHOD 1: arrow function, if else statements
let isLockNessMonster = s => {
  // if 'tree fiddy', 3.50, & three fifty are not -1, then they are in the string
  // and we can return true that it is Nessie
  if (s.indexOf('tree fiddy') !== -1) return true;
  else if (s.indexOf('three fifty') !== -1) return true;
  else if (s.indexOf('3.50') !== -1) return true;
  else return false;
}

// METHOD 2: use arrow function * ternary operator so code is all on one line
let isLockNessMonster = s => s.indexOf('tree fiddy') !== -1 ? true : s.indexOf('three fifty') !== -1 ? true : s.indexOf('3.50') !== -1 ? true : false

// METHOD 3: shortening ternary operator
let isLockNessMonster = s => s.indexOf('tree fiddy') !== -1 || s.indexOf('three fifty') !== -1 || s.indexOf('3.50') !== -1 ? true : false;
