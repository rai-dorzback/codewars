/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

const multiplicationTable = n => {
  // array to fill with the table
  let table = [];
  // loop from 1 to n
  for(let i = 1; i <= n; i++) {
    // array for each row
    let row = [];
    // nested loop from 1 to n
    for(let j = 1; j <= n; j++) {
      // multiply i and j and add to row
      row.push(i * j);
    };
    table.push(row);
  };
  return table;
};
