/*
Your wizard cousin works at a Quidditch stadium and wants you to write a function that 
calculates the points for the Quidditch scoreboard!

Story
Quidditch is a sport with two teams. The teams score goals by throwing the Quaffle through 
a hoop, each goal is worth 10 points.

The referee also deducts 30 points (- 30 points) from the team who are guilty of carrying 
out any of these fouls: Blatching, Blurting, Bumphing, Haverstacking, Quaffle-pocking, Stooging

The match is concluded when the Snitch is caught, and catching the Snitch is worth 150 points. 
Let's say a Quaffle goes through the hoop just seconds after the Snitch is caught, in that case 
the points of that goal should not end up on the scoreboard seeing as the match is already concluded.

You don't need any prior knowledge of how Quidditch works in order to complete this kata, but 
if you want to read up on what it is, here's a link: https://en.wikipedia.org/wiki/Quidditch

Task
You will be given a string with two arguments, the first argument will tell you which teams are
playing and the second argument tells you what's happened in the match. Calculate the points and 
return a string containing the teams final scores, with the team names sorted in the same order as 
in the first argument.

Examples:
Given an input of:
quidditchScoreboard("Ilkley vs Yorkshire", "Ilkley: Quaffle goal, Yorkshire: Haverstacking foul, Yorkshire: Caught Snitch")
The expected output would be:
"Ilkley: 10, Yorkshire: 120"
Separate the team names from their respective points with a colon and separate the two teams with a comma.
Good luck!
*/

// method 1
const quidditchScoreboard = (teams, actions) => {
  // store teams in variables
  teams = teams.split(' vs ');
  let team1 = teams[0]
  let team2 = teams[1]
  let team1Points = 0;
  let team2Points = 0;
  
  // boolean for if snitch is caught
  let snitchCaught = false;

  // create array of all of the moves
  actions = actions.split(', ');
  
  // if team starts with team1, add points
  actions.forEach(move => {
    // separate team from move
    move = move.split(': ')
    if (!snitchCaught) {
       if(move[1] === 'Caught Snitch') {
        move[0] === team1 ? team1Points += 150 : team2Points += 150;
        snitchCaught = true;
      } else if (move[1] === 'Quaffle goal') {
        move[0] === team1 ? team1Points += 10 : team2Points += 10; 
      } else {
        move[0] === team1 ? team1Points -= 30 : team2Points -= 30; 
      } 
    }
  });
  
  return `${team1}: ${team1Points}, ${team2}: ${team2Points}`
};

// method 2
const quidditchScoreboard = (teams, actions) => {
  // split teams into an array with each team name
  teams = teams.split(' vs ');
  
  // split actions into array of each individual action
  actions = actions.split(', ')
  
  // variables to store each team
  let team1 = teams[0]
  let team2 = teams[1]
  
  // object to hold scores
  let teamScores = {};
  teamScores[team1] = 0;
  teamScores[team2] = 0;
  
  // boolean to store whether the snitch was caught
  let snitchCaught = false;
  
  actions.forEach(action => {
    // split each action into its team and move, store in variables
    let [team, move] = action = action.split(': ')
    
    // if the snitch has not yet been caught
    if(!snitchCaught) {
      // if they caught the snitch
      if(move === 'Caught Snitch') {
        // toggle snitchCaught to true
        snitchCaught = true;
        // give that team 150 points
        teamScores[team] += 150;
      } else if (move === 'Quaffle goal') {
        teamScores[team] += 10;
      } else {
        teamScores[team] -= 30;
      };
    };
  });
  
  return `${team1}: ${teamScores[team1]}, ${team2}: ${teamScores[team2]}`;
};
