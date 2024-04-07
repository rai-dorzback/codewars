'''
You seem to have the worst luck at rock, paper, scissors! Everyday you play 
against your friends, but never win. You want a taste of victory!
In this kata you need to define r_p_s_cheat() that takes an argument, either 
'rock', 'paper', or 'scissors' and returns your counter to win!
But there's a catch! Your friends know how terrible you are at rock, paper, 
scissors, and if you win all of the time, then they'll see through your deception!
You need r_p_s_cheat to win 88-92% of the time and lose 8-12% of the time! 
In other words, you should never tie!
Note: The testing will check to see that this condition is fulfilled!
If you believe your solution will work, but doesn't on the first try, submit again!
'''
import random as r
def r_p_s_cheat(choice):
    # winning combo
    win = {'rock':'paper','paper':'scissors','scissors':'rock'}
    # losing combos
    lose = {'paper':'rock','scissors':'paper','rock':'scissors'}
    # if the random integer is less than 10 (about 90% of the time)
    if r.randint(1,10) < 10:
        return win[choice] # return winning
    return lose[choice] # else return losing (about 10%)
