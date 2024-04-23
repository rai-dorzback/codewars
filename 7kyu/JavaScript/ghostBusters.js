/*
So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:

"Sky scra per" -> "Skyscraper"
If the building contains no ghosts, return the string:

"You just wanted my autograph didn't you?"
*/

// method 1: filter
const ghostBusters = b => b.split('').every(e => e !== ' ') ? 'You just wanted my autograph didn\'t you?' : b.split('').filter(e => e !== ' ').join('');

// method 2: replaceAll
const ghostBusters = b => b.split('').every(e => e !== ' ') ? 'You just wanted my autograph didn\'t you?' : b.replaceAll(' ', '');
