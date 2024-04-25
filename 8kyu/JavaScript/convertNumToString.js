/*
Convert a number to a string
*/

// method 1: template literal
const numberToString = n => `${n}`;

// method 2: concatenate num to str
const numberToString = n => {
  let str = '';
  return str += n;
};

// method 3
const numberToString = n => ''+n

// method 4: String()
const numberToString = n => String(n);

// method 5: Number.toString() method
const numberToString = n => n.toString();
