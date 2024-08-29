/*
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.
*/

function wordsToMarks(str){
    // alphabet array
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    // map string so each letter turns into its score (index + 1)
    return str.split('').map(e => alpha.indexOf(e)+1)
    // reduce to add it up
    .reduce((a, b) => a + b, 0)
}

// more readable version
function wordsToMarks2(str){
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let scoreArray = str.split('').map(e => alpha.indexOf(e)+1)
    let sum = scoreArray.reduce((a, b) => a + b, 0)
    return sum
}