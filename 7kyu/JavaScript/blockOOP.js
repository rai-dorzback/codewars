/*
Write a class Block that creates a block (Duh..)

Requirements
The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

Define these methods:
  `getWidth()` return the width of the `Block`
  `getLength()` return the length of the `Block`
  `getHeight()` return the height of the `Block`
  `getVolume()` return the volume of the `Block`
  `getSurfaceArea()` return the surface area of the `Block`
Examples
    let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
    b.getWidth() // -> 2
    b.getLength() // -> 4
    b.getHeight() // -> 6
    b.getVolume() // -> 48
    b.getSurfaceArea() // -> 88
Note: no error checking is needed
*/

// method 1
class Block {
  constructor(data) {
    this.w = +data[0]
    this.l = +data[1]
    this.h = +data[2]
  }
  
  getWidth() {
    return this.w
  }
  
  getLength() {
    return this.l
  }
  
  getHeight() {
    return this.h
  }
  
  getVolume() {
    const vol = this.l * this.w * this.h
    return vol
  }
  
  getSurfaceArea() {
    const SA = (2*(this.l*this.w))+(2*(this.l*this.h))+(2*(this.h*this.w))
    return SA
  }
}

const block = new Block([2, 4, 6])
block.getSurfaceArea() // 88

// method 2: more concise
class Block {
  constructor(data) {
    // destructure data into 3 variables
    [this.w, this.l, this.h] = data
  }

  // put these on one line
  getWidth() {return this.w}
  getLength() {return this.l}
  getHeight() {return this.h}
  
  getVolume() {
    const vol = this.l * this.w * this.h
    return vol
  }
  
  getSurfaceArea() {
    // destructure to make it more readable and DRY (don't have to keep re-typing "this")
    let {l, w, h} = this;
    const SA = 2 * (l*w + l*h + w*h)
    return SA
  }
}
