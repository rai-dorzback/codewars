/*
Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

function openOrSenior(data){
    // create empty array for data
    let new_data = []

    // loop through data
    data.forEach(pair => {
        if (pair[0] >= 55 && pair[1] > 7){
            new_data.push('Senior')
        } else {
            new_data.push('Open')
        }
    });

    return new_data;
  }
