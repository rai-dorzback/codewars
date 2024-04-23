'''
Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!
In this kata, strings represent buildings while whitespaces within those strings represent ghosts.
So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:
"Sky scra per" -> "Skyscraper"
If the building contains no ghosts, return the string:
"You just wanted my autograph didn't you?"
'''

# method 1
def ghostbusters(b):
    if b.find(' ') == -1:
        return 'You just wanted my autograph didn\'t you?'
    else:
        return b.replace(' ', '')

# method 2
ghostbusters = lambda b: b.replace(' ', '') if ' ' in b else 'You just wanted my autograph didn\'t you?'
