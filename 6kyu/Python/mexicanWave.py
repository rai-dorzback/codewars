'''
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.
 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
'''

# METHOD 1
def wave(s):
    waveArr = [];
    
    i = 0; # index to count in for loop
    # for each character in the string
    for char in s:
        word = f'{s[0:i]}{char.upper()}{s[i+1:]}'
        waveArr.append(word)
        i += 1;
    
    # filter list to only items that are not equal to s (which is all lowercase) in order to skip the spaces
    filtered = list(filter(lambda e: e != s, waveArr))
    return filtered

# METHOD 2
def wave(s):
    # list comprehension to put it all on one line
    # concatenate the string up until i with the string from i on capitalized (so first letter of this substring is capitalized)
    # only do it if the current element is not an empty space
    return [f'{s[:i]}{s[i:].capitalize()}' for i in range(len(s)) if s[i] != ' ']

# METHOD 3: same as method 2 but with lambda (all on one line)
wave = lambda s: [f'{s[:i]}{s[i:].capitalize()}' for i in range(len(s)) if s[i] != ' ']
