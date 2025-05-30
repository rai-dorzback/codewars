/*
https://www.codewars.com/kata/5a145ab08ba9148dd6000094/train/javascript
In this Kata, you will write a function doubles that will remove double string characters that are adjacent to each other.

For example:

doubles('abbcccdddda') = 'aca', because, from left to right:

a) There is only one 'a' on the left hand side, so it stays.
b) The 2 b's disappear because we are removing double characters that are adjacent. 
c) Of the 3 c's, we remove two. We are only removing doubles. 
d) The 4 d's all disappear, because we first remove the first double, and again we remove the second double.
e) There is only one 'a' at the end, so it stays.
Two more examples: doubles('abbbzz') = 'ab' and doubles('abba') = "". In the second example, when we remove the b's in 'abba', the double a that results is then removed.

The strings will contain lowercase letters only. More examples in the test cases.

Good luck!
*/

// SOLUTION 1
function doubles(str){
  const res = [];
  // loop through string
  for(const char of str) {
    // if result has something in it and the last item in result is the current character
    if(res.length !== 0 && res[res.length-1] === char) {
      console.log(`Result before removing: ${res}`)
      // remove the last item
      res.pop();
      console.log(`Result after removing: ${res}`)
    } else {
      // otherwise add the current char
      res.push(char);
    };
  };
  return res.join('');
};

console.log(doubles('zzzzykkkd'), 'ykd');

// SOLUTION 2: same as 1 but use ternary
function doubles(str){
  const res = [];
  for(const char of str) {
    res.length !== 0 && res[res.length-1] === char ? res.pop() : res.push(char);
  }
  return res.join('');
};
