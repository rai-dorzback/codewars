/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It 
must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

// METHOD 1: if / else statement
let likes = n => {
  if (n.length <= 0) return 'no one likes this';
  else if (n.length === 1) return `${n[0]} likes this`;
  else if (n.length === 2) return `${n[0]} and ${n[1]} like this`;
  else if (n.length === 3) return `${n[0]}, ${n[1]}, and ${n[2]} like this`;
  else {
    return `${n[0]}, ${n[1]}, and ${n.length - 2} others like this`
  }
}

// METHOD 2: switch statement
let likes = n => {
  switch(n.length) {
    case 0: return 'no one likes this';
    case 1: return `${n[0]} likes this`;
    case 2: return `${n[0]} and ${n[1]} like this`;
    case 3: return `${n[0]}, ${n[1]} and ${n[2]} like this`;
    default: return `${n[0]}, ${n[1]} and ${n.length - 2} others like this`;
  }
}

