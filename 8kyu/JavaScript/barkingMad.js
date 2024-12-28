/*
Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
Use method prototypes to enable all Dogs to bark.
*/

// SOLUTION 1
function Dog (breed) {
  this.breed = breed;
  this.bark = () => "Woof";
}

const snoopy = new Dog("Beagle");
const scoobydoo = new Dog("Great Dane");

// SOLUTION 2: class syntax
class Dog {
  constructor(breed) {
    this.breed = breed;
  }
  
  bark() {
    return "Woof"
  }
}

const snoopy = new Dog("Beagle");
const scoobydoo = new Dog("Great Dane");
