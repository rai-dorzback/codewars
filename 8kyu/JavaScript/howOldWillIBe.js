/*
https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript
Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.
*/

// SOLUTION 1
function  calculateAge(birthYear, currentYear) {  
    // currentYear - birthYear
    const years = currentYear - birthYear;
    // if positive - will be X years old, negative - will be born in X years, equal - were born this year
    const phrase = years === 0 ? 'You were born this very year!' : years > 0 ? `You are ${years} ${years === 1 ? 'year' : 'years'} old.` : `You will be born in ${Math.abs(years)} ${Math.abs(years) === 1 ? 'year' : 'years'}.`;
    return phrase;
};
  
  

// SOLUTION 2: more readable, write out if/else
function  calculateAge(birthYear, currentYear) {  
    let years = currentYear - birthYear
    let phrase;
    if(years === 0) {
        phrase = 'You were born this very year!'
    } else if(years > 0) {
        phrase = `You are ${years} ${years === 1 ? 'year' : 'years'} old.`
    } else {
        years = Math.abs(years)
        phrase = `You will be born in ${years} ${years === 1 ? 'year' : 'years'}.`
    }
    return phrase;
};