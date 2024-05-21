/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

const noBoringZeros = n => {
  n = String(n).split('')
  while(true) {
   if (n[n.length-1] === '0') {
    n.pop()
  } else {
    break
  } 
  }
  return +(n.join(''))
}
