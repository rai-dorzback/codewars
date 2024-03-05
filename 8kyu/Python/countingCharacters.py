'''
https://www.codewars.com/kata/55f1b763dd670651620000ce/train/python
Define a method named countCharOccurrences or count_char_occurrences that accepts a string and a char as inputs and returns the number of times the char occurs in the string as an int.
'''
# SOLUTION 1: use built-in method
def count_char_occurrences(str, char):
    return str.count(char)

# SOLUTION 2: same as 1 but all on one line using a lambda function
count_char_occurrences = lambda str, char : str.count(char)

