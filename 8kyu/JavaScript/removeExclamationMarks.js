/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

// method 1: filter
const removeExclamationMarks = s => s.split('').filter(e => e !== '!').join('');

// method 2: replaceAll
const removeExclamationMarks = s => s.replaceAll('!', '');
