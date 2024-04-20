/*
Your friend Robbie has successfully created an AI that is capable of communicating in English!

Robbie's almost done with the project, however the machine's output isn't working as expected. Here's a sample of a sentence that it outputs:

["this","is","a","sentence"]
Every time that it tries to say a sentence, instead of formatting it in normal English orthography, it just outputs a list of words.

Robbie has pulled multiple all-nighters to get this project finished, and he needs some beauty sleep. So, he wants you to write the last part of his code, a sentencify function, which takes the output that the machine gives, and formats it into proper English orthography.

Your function should:

Capitalise the first letter of the first word.
Add a period (.) to the end of the sentence.
Join the words into a complete string, with spaces.
Do no other manipulation on the words.
*/

// method 1
const sentencify = w => {
  // make the first word's first letter uppercase
  w[0] = `${w[0][0].toUpperCase()}${w[0].slice(1)}`;
  // add a period with template literal
  return `${w.join(' ')}.`;
};

// method 2
const sentencify = w => {
  w = w.join(' ')
  return `${w.charAt(0).toUpperCase()}${w.slice(1)}.`;
};

// method 3
const sentencify = w => `${w[0][0].toUpperCase()}${w.join(' ').slice(1)}.`;
