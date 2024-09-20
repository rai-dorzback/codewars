/*
Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.
In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.
Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
Happiness rating will be total score / number of people in the room.
Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).
*/

// solution 2: more concise, sum happiness instead of adding to array and summing later, use ternary expression at the end
function outed(meet, boss){
  let happiness = 0
  for(employee in meet) {
    if(employee === boss) {
      happiness += meet[employee]*2
    } else {
      happiness += meet[employee]
    }
  }
  happiness = happiness/Object.keys(meet).length
  const result = happiness <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
  return result
};

// solution 1
// P: object of coworkers and their happiness scores, string of the name of your boss
// R: If happiness score <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'. Happiness rating will be total score / number of people in the room. boss's score worth double

function outed(meet, boss){
  // calculate happiness score
  // array to hold array of scores
  let scores = []
  let numEmployees = 0
  // loop through properties in meet object
  for(employee in meet) {
    // if the employee is the boss, double the score and add to array
    if(employee === boss) {
      scores.push(meet[employee]*2)
    } else {
      // else add score to array
      scores.push(meet[employee]) 
    }
    numEmployees += 1 // add to count of employees
  }
  // calculate happiness score by adding all the scores up and dividing by number of employees
  const happiness = scores.reduce((a, b) => a + b, 0)/numEmployees
  // conditional to assess if score is less/ greater than 5
  if(happiness <= 5) {
    return 'Get Out Now!'
  }
  return 'Nice Work Champ!'
};

outed({"tim":6,"jim":9,"randy":5,"sandy":3,"andy":7,"katie":0,"laura":3,"saajid":2,"alex":4,"john":9,"mr":5}, "sandy") // 'Nice Work Champ!'
