/*
https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/
function highestRank(arr){
    // count frequency of each number, store in counts object
    let counts = {};
    for(const num of arr) {
      counts[num] ? counts[num]++ : counts[num] = 1;
    };
    // loop through counts object to get most frequent number
    let frequency = 0;
    let maxNum = 0;
    for(const num in counts) {
      let freq = counts[num];
      // if it is more frequent, update frequency/maxnum
      if(freq > frequency) {
        frequency = freq;
        maxNum = num;
      // if they are the same frequency, use the maximum number
      } else if(freq === frequency) {
        maxNum = Math.max(maxNum, num);
      };
    };
    return +maxNum;
};
  
highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12], 12)