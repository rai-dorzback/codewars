/*
You are the judge at a competitive eating competition and you need to choose a winner!
There are three foods at the competition and each type of food is worth a different amount of points. Points are as follows:

Chickenwings: 5 points
Hamburgers: 3 points
Hotdogs: 2 points

Write a function that helps you create a scoreboard. It takes as a parameter a list of objects representing the participants, for example:
[
  {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
  {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
]

It should return "name" and "score" properties sorted by score; if scores are equals, sort alphabetically by name.
[
  {name: "Big Bob", score: 134},
  {name: "Habanero Hillary", score: 98}
]
*/

// METHOD 1
const scoreboard = a => {
  let scoreboard = []
  // for each contestant in the list
  a.forEach(c => {
    // calculate their score
    let cScore = (c.chickenwings * 5) + (c.hamburgers * 3) + (c.hotdogs * 2);
    // add the object with name and score to the array
    scoreboard.push({name: c.name, score: cScore})
  })
  // return a list of objects with each contestant's name and score sorted by score or name if scores are equal
  return scoreboard.sort((a, b) => b.score - a.score || a.name > b.name)
}

const contestants = [
  {name: "Habanero Hillary",
   chickenwings: 5, 
   hamburgers: 17, 
   hotdogs: 11},
  
  {name: "Big Bob", 
   chickenwings: 20, 
   hamburgers: 4, 
   hotdogs: 11}
]
scoreboard(contestants)

// METHOD 2
const scoreboard = a => {
  return a.map(c => { // use map to create new array of objects with only the needed information
    return {
      name: c.name,
      score: (c.chickenwings * 5) + (c.hamburgers * 3) + (c.hotdogs * 2)
    }
  }).sort((a, b) => b.score - a.score || a.name > b.name); // sort by score OR by name
};
