// SOLUTION 2: linear complexity
function findEvenIndex(arr) {
  let leftSum = 0;
  let rightSum = arr.reduce((sum, num) => sum+num, 0);
  
  for(let i = 0; i < arr.length; i++) {
    // if we are not on the first num
    if(i > 0) {
      // add prev number to leftSum
      leftSum += arr[i-1]; 
    }
    // subtract current number from rightSum
    rightSum -= arr[i];
    
    // if the sums are equal, return current index
    if(leftSum === rightSum) {
      return i;
    };
  };
  // if none were equal, return 1
  return -1;
};

// SOLUTION 1: brute force, quadratic complexity
// arr of int -> index where sum(numToLeft) === sum(numsToRight)
function findEvenIndex(arr) {
    var leftSideSum = 0;
    let index = -1;
    // arr - loop
    for(let i = 0; i < arr.length; i++) {
      // get sum of right side
      const rightSideSum = arr.slice(i+1, arr.length+1).reduce((a, c) => a+c, 0);
      // if both sides equal
      if(leftSideSum === rightSideSum) {
        return i;
      }  else {
        leftSideSum += arr[i];
      };
    }
    return index;
  }
  
  console.log(findEvenIndex([8, 0]), 0)
  // console.log(findEvenIndex([1,2,3,4,3,2,1]), 3)
  // console.log(findEvenIndex([1, 100, 50, -51, 1, 1]), 1)
  // console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]), 0)
  // console.log(findEvenIndex([20, 10]), -1)