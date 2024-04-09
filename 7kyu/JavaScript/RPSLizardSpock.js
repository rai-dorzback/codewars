/*
In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors
Task:
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

Inputs
Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".
*/

// method 1
const rpsls = (p1, p2) => {
  const wins = {
    'paper': ['scissors', 'lizard'],
    'lizard': ['scissors', 'rock'],
    'rock': ['paper', 'spock'],
    'spock':['paper', 'lizard'],
    'scissors': ['rock', 'spock']
  };
  
  if(p1 === p2) {
    return 'Draw!';
  } else if (wins[p1].includes(p2)) {
    return 'Player 2 Won!';
  } else return 'Player 1 Won!';
};

// method 2: same as method 1 but using ternary
const rpsls = (p1, p2) => {
  const combos = {
    'paper': ['scissors', 'lizard'],
    'lizard': ['scissors', 'rock'],
    'rock': ['paper', 'spock'],
    'spock':['paper', 'lizard'],
    'scissors': ['rock', 'spock']
  };
  
  return p1 === p2 ? 'Draw!' : combos[p1].includes(p2) ? 'Player 2 Won!' : 'Player 1 Won!';
};
