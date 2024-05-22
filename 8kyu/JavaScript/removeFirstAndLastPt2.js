/*
If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/

const array = s => {
  s = s.split(',')
  if(s.length < 3) {
    return null
  } else {
    s.pop()
    s.shift()
    return s.join(' ');
  };
};
