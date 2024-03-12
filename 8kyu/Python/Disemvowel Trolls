'''
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
'''

# METHOD 1
def disemvowel(string):
    newString = ''
    vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']

    # for each character in the string
    for character in string:
        
        # if that character is not a vowel
        if character not in vowels:
            
            # add it to new string
            newString += character
    
    return newString

# METHOD 2: list comprehension
def disemvowel(string):
    vowels = 'AaEeIiOoUu'
    return ''.join([char for char in string if char not in vowels])

# METHOD 3: lambda & list comprehension
disemvowel = lambda string : ''.join([char for char in string if char not in 'AaEeIiOoUu'])
