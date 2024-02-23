'''
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
'''

# METHOD 1
def count(s):
    dict = {}
    for char in s:
        if char in dict:
            dict[f'{char}'] += 1
        else:
            dict[f'{char}'] = 1
    return dict

# METHOD 2: use lambda function and list comprehension to create the dictionary
count = lambda s: {char: s.count(char) for char in s}
