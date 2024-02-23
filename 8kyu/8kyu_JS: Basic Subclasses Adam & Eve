/*
You have to do God's job. The creation method must return an array of length 2 
containing objects (representing Adam and Eve). The first object in the array 
should be an instance of the class Man. The second should be an instance of the 
class Woman. Both objects have to be subclasses of Human. Your job is to implement 
the Human, Man and Woman classes.
*/

class God{

  static create(){
    let eve = new Woman('eve');
    let adam = new Man('adam');
    return [adam, eve]
  }
}

class Human {
  constructor(name) {
    this.name = name;
  }
}

class Woman extends Human {
  constructor(name) {
    super(name)
  }
}
  
class Man extends Human {
  constructor(name) {
    super(name)
  }
}
