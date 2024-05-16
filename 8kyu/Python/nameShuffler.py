'''
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)
"john McClane" --> "McClane john"
'''

# method 1
def name_shuffler(str):
    return ' '.join(reversed(str.split(' ')))

# method 2
def name_shuffler(str):
    [first, last] = str.split(' ')
    return f'{last} {first}'
