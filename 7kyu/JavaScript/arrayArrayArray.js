/*
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/

function explode(x){
    // get score
    const numArray = x.filter(e => typeof e === 'number')
    const score = numArray.reduce((a, b) => a + b, 0)
    // if there are no numbers, return void
    if(numArray.length===0) {
      return 'Void!'
    }
    
    let res = []
    // for loop to create score num of subarrays
    for(let i = 1; i <= score; i++) {
      res.push(x)
    }
    return res
  }
  
  explode(['a', 3]) // [['a', 3], ['a', 3], ['a', 3]]
  explode([9, 3])
  explode(['b', 'c']) // 'Void!'
  explode(['b', 0]) // []