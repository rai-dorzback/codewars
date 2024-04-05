/*
When provided with a number between 0-9, return it in words.

Input :: 1
Output :: "One".

If your language supports it, try using a switch statement.
*/

// METHOD 1
const switchItUp = n => {
  const nums = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    0: 'Zero',
  }
  return nums[n]
}

// METHOD 2
const switchItUp = n => ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'][n];
