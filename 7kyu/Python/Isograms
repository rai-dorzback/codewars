'''
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
'''

# METHOD 1
def is_isogram(string):
    string = string.lower()
    for letter in string:
        if string.count(letter) > 1:
            return False
    return True

# METHOD 2
def is_isogram(string):
    # turn string to lower
    string = string.lower()
    # return a boolean evaluating whether the length of the string is equal to the length of all the unique characters in the string (found using set())
    return len(string) == len(set(string))

# METHOD 3: method 2 but on one line
is_isogram = lambda string : len(string.lower()) == len(set(string.lower()))
