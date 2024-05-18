/*
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

// method 1: use class syntax, constructor, getter
class Ghost {
  constructor() {
    // array of possible colors
    const colors = ['white', 'yellow', 'purple', 'red'];

    // random index between 0 and 4, using Math.floor to round to an integer
    let randomInd = Math.floor(Math.random() * 4);
    
    // private property, random color selected from colors array
    this._color = colors[randomInd];
  };

  // getter to return the color
  get color() {
    return this._color;
  };
};

// method 2: constructor function
const Ghost = function() {
  this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
};
