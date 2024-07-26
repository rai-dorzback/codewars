'''
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
'''

# METHOD 1: use conditionals only
def rps(p1, p2):
    if (p1 == 'scissors' and p2 == 'paper') or (p1 == 'paper' and p2 == 'rock') or (p1 == 'rock' and p2 == 'scissors'):
        return 'Player 1 won!'
    elif p1 == p2:
        return 'Draw!'
    else:
        return 'Player 2 won!'

# METHOD 2: use a dictionary to hold the winning pairs and reduce typing
def rps(p1, p2):
    beats = {'rock': 'scissors', 'scissors' : 'paper', 'paper' : 'rock'}
    # if p1 chooses an item and p2 chooses that key's value (i.e., if p1 chooses rock and p2 chooses scissors)
    if beats[p1] == p2:
        return 'Player 1 won!'
    elif beats[p2] == p1:
        return 'Player 2 won!'
    return 'Draw!'
