/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

// Parameters: array of 10 strings. each string will be team x : team y's scores
// Return: number of points team X got

function points(games) {
  let xPoints = 0;
  // loop through games
  games.forEach(game => {
    // for each game, isolate x and y's score by converting each string into an array of 2 numbers
    game = game.split(':')
    let x = +game[0];
    let y = +game[1];
    // if x > y: points += 3
    // else if x = y: points += 1
    // else: points += 0
    x > y ? xPoints += 3 : x === y ? xPoints += 1 : xPoints += 0;
  });
  return xPoints;
};

// Example
const games = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"];
points(games) // 10 wins: 3+3+3+3+3+3+3+3+3+3 = 30
