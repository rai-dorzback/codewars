'''
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
'''
# method 1
def remove_exclamation_marks(s):
    return s.replace('!', '')

# method 2: lambda
remove_exclamation_marks = lambda s: s.replace('!', '')
