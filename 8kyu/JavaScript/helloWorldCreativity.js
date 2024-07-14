/*
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?
*/

// method 1: arrow function
const greet = () => "hello world!"

// method 2: regular function
function greet() {
  return 'hello world!'
}

// arr to string
function greet() {
  const x = [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!' ]
  return x.join('')
}
