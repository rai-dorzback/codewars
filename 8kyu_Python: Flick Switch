'''
Task
Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.

Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
'''
# METHOD 1: boolean to control the switch. if the element is 'flick', flip the switch (switch = not switch)
def flick_switch(l):
    newList = []
    switch = True
    for e in l:
        if e == 'flick':
            switch = not switch
            newList.append(switch)
        else:
            newList.append(switch)
    return newList

# METHOD 2: using list comprehension
def flick_switch(l):
    switch = True
    return [switch := not switch if e == 'flick' else switch for e in l ]
