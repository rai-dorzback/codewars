/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 
'good' and bad ideas 'bad'. If there are one or two good ideas, return 
'Publish!', if there are more than 2 return 'I smell a series!'. If 
there are no good ideas, as is often the case, return 'Fail!'.
*/

// METHOD 1
let well = a => {
  // count of how many good ideas are in the array
  let numGoodIdeas = a.filter(idea => idea === 'good').length

  if (numGoodIdeas > 2) return 'I smell a series!';
  else if (numGoodIdeas === 0) return 'Fail!';
  else return 'Publish!';
}

// METHOD 2: ternary expression instead of if/else statement
let well = a => {
  // count of how many good ideas are in the array
  let numGoodIdeas = a.filter(idea => idea === 'good').length

  return numGoodIdeas > 2 ? 'I smell a series!' : numGoodIdeas === 0 ? 'Fail!' : 'Publish!';
}

// FUNCTION CALL
let ideas = ['bad', 'bad', 'bad', 'bad']

well(ideas)
