/*
Define a class called Lamp. It will have a string attribute for color and boolean attribute, on, that will refer to whether the lamp is on or not. Define your class constructor with a parameter for color and assign on as false on initialize.

Give the lamp an instance method called toggleSwitch that will switch the value of the on attribute.

Define another instance method called state that will return "The lamp is on." if it's on and "The lamp is off." otherwise.
*/

// method 1
class Lamp {
  constructor(color, on=false) {
    this.color = color,
    this.on = on
  }
  
  toggleSwitch() {
    return this.on === false ? this.on = true : this.on = false;
  }
  
  state() {
    return this.on === true ? 'The lamp is on.' : 'The lamp is off.'
  }
}

// method 2: simpler ways to initiate toggle and state methods
class Lamp {
  constructor(color, on=false) {
    this.color = color,
    this.on = on
  }
  
  toggleSwitch() {
    return this.on = !this.on;
  }
  
  state() {
    return this.on ? 'The lamp is on.' : 'The lamp is off.'
  }
}
