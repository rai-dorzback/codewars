/*
https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

// SOLUTION 1: O(n)
function defineSuit(card) {
  const suits = {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades'
  };
  // loop through card til one of them is the suit
  for(const char of card) {
    if(suits[char]) {
      return suits[char]
    };
  };
};

// SOLUTION 2: O(1)
// take slice of last character in card to get suit
function defineSuit(card) {
  return {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades'
  }[card.slice(-1)];
};
