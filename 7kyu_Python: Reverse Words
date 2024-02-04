'''
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
'''

# METHOD 1: lambda function where we split the text into an array of each word, use map and have the function argument reverse string using [::-1], 
# then turning the map into a list and joining it together by a space to return a string with each word reversed in place
reverse_words = lambda text : ' '.join(list(map(lambda word: word[::-1], text.split(' '))))

# METHOD 2: same as method 1 but without lambda
def reverse_words(text):
  return ' '.join(list(map(lambda word: word[::-1], text.split(' '))))

#METHOD 3: more readable version of methods 1 & 2
def reverse_words(text):
    words = text.split(' ')
    # use map to make a new object with each word in the array words reversed
    reversedWords = map(lambda word: word[::-1], words)
    # convert to list
    listReversed = list(reversedWords)
    # join list into a string
    return ' '.join(listReversed)
