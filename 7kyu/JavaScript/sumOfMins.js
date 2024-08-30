/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)
*/

function sumOfMinimums(arr) {
    // sort each nested array, index so you only get the first element of each nested array (minimum number)
    const minsArray = arr.map(e => e.sort((a, b) => a - b)[0])
    // sum up the minimums
    const res = minsArray.reduce((a, b) => a+b, 0)
    // return result
    return res
  }
  
  const a = [ [ 1, 2, 3, 4, 5 ], 
             [ 5, 6, 7, 8, 9 ],
             [ 100, 21, 34, 56, 20 ]]
  sumOfMinimums(a) // 1 + 5 + 20 = 6