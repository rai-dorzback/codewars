/*
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
*/

// method 1
function combat(health, damage) {
  const currentHP = health -= damage
  return currentHP >= 0 ? currentHP : 0
};

// method 2
const combat = (hp, dmg) => hp < dmg ? 0 : hp - dmg;
