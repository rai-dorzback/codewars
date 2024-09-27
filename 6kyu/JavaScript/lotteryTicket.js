/*
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.
*/

function bingo(tickets, win){
  // count mini wins
  let miniWins = 0
  // loop through tickets array
  tickets.forEach(ticket => {
    let letters = ticket[0]
    let num = ticket[1]
    // loop through letters to find charCode
    for(let letter of letters) {
      let charCode = letter.charCodeAt(0)
      // if charCode is equal to the number, add to miniWins
      if(charCode === num) {
        miniWins += 1
        // can only have one win per subarray, so break loop after
        break
      }
    }
  })
  // if mini wins >= win Winner! else Loser!
  return miniWins >= win ? 'Winner!' : 'Loser!'
};

const ticket = [
  ['ABC', 65], 
  ['HGR', 74], 
  ['BYHT', 74]
]

bingo(ticket, 2); // Loser!
bingo([['JTGSDD',65], 
       ['ZO',74], 
       ['CIFNRO',89], 
       ['OFWPFYSY',89]], 2) // Loser!
