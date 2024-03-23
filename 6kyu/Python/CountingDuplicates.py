'''
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
'''

# METHOD 1
def duplicate_count(s):
    s = s.lower() # make string lowercase
    duplicates = []
    for letter in s:
      # if there is more than 1 of that letter in the string & its not already on the list
        if s.count(letter) > 1 and letter not in duplicates:
            duplicates.append(letter)
    return len(duplicates)

# METHOD 2
def duplicate_count(s):
    # use list comprehension to create a new list of all letter duplicates, then make it a set of unique characters, and return the length
    return len(set([letter for letter in s.lower() if s.lower().count(letter) > 1]))

# Method 2 but with lambda
duplicate_count = lambda s : len(set([letter for letter in s.lower() if s.lower().count(letter) > 1]))
