'''
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 
'good' and bad ideas 'bad'. If there are one or two good ideas, return 
'Publish!', if there are more than 2 return 'I smell a series!'. If 
there are no good ideas, as is often the case, return 'Fail!'.
'''

# METHOD 1
def well(l):
    goodIdeaCount = 0
    for i in l:
        if i == 'good':
            goodIdeaCount += 1
    
    if goodIdeaCount > 2:
        return 'I smell a series!'
    elif goodIdeaCount == 0:
        return 'Fail!'
    else:
        return 'Publish!'

# METHOD 2: use list.count() built-in method and ternary expression to shorten the if/else statement
def well(x):
    goodIdeaCount = x.count('good')
    return 'I smell a series!' if goodIdeaCount > 2 else 'Fail!' if goodIdeaCount == 0 else 'Publish!'

# METHOD 3: shortening method 2 onto one line (not as readable as the others but is shorter)
well = lambda x: 'I smell a series!' if x.count('good') > 2 else 'Fail!' if x.count('good') == 0 else 'Publish!'
