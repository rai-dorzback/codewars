'''
Imagine you are creating a game where the user has to guess the correct number. But 
there is a limit of how many guesses the user can do.

If the user tries to guess more than the limit, the function should throw an error.
If the user guess is right it should return true.
If the user guess is wrong it should return false and lose a life.
Can you finish the game so all the rules are met?
'''

class Guesser:
    def __init__(self, number, lives):
        self.number = number
        self.lives = lives
  
    def guess(self,n):
        # if the user still has lives
        if self.lives != 0:
            # if the user guesses wrong
            if n != self.number:
                self.lives -= 1
                return False
            else:
                return True
        else:
            raise Exception('You have zero lives left')
