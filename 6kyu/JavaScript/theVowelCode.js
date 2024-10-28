/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

// SOLUTION 1: linear complexity (map)
// str -> encoded str where letters are nums
function encode(str) {
  const vowels = {
  'a': '1',
  'e': '2',
  'i': '3',
  'o': '4',
  'u': '5'
  };
  // str -> arr -> map
  return str.split('').map(char => {
    // if char is a key in the obj replace it with its value
    if(vowels[char]) {
      return vowels[char]
    }
    return char
    // join
  }).join('')
}

// encoded str -> decode str from nums to letters
function decode(str) {
  const nums = {
  '1': 'a',
  '2' : 'e',
  '3' : 'i',
  '4' : 'o',
  '5' : 'u'
  }
  return str.split('').map(char => {
    if(nums[char]) {
      return nums[char]
    }
    return char
  }).join('')
}

// SOLUTION 2: same as one but use ternary, more concise
function encode(str) {
  const vowels = {
  'a': '1',
  'e': '2',
  'i': '3',
  'o': '4',
  'u': '5'
  };
  return str.split('').map(char => vowels[char] ? vowels[char] : char).join('')
}

function decode(str) {
  const nums = {
  '1': 'a',
  '2' : 'e',
  '3' : 'i',
  '4' : 'o',
  '5' : 'u'
  }
  return str.split('').map(char => nums[char] ? nums[char] : char).join('')
}

encode('hello') // 'h2ll4'
encode('How are you today?') // 'H4w 1r2 y45 t4d1y?'

decode('h2ll4') // 'hello'
decode('H4w 1r2 y45 t4d1y?') // 'How are you today?'
