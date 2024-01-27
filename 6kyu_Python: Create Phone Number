'''
Write a function that accepts an array of 10 integers (between 0 and 9), that returns 
a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
'''

# METHOD 1: format strings/template literals
def createPhoneNumber(n):
    return f'({n[0]}{n[1]}{n[2]}) {n[3]}{n[4]}{n[5]}-{n[6]}{n[7]}{n[8]}{n[9]}'

# METHOD 2: use a formatted string, loop through numbers, add them to the format
def createPhoneNumber(n):
    format = '(xxx) xxx-xxxx'
    for num in n:
        # last argument means to replace only the first X
        format = format.replace('x', str(num), 1)
    return format

# METHOD 3: lambda function to do the same thing as method 1
create_phone_number = lambda n : f'({n[0]}{n[1]}{n[2]}) {n[3]}{n[4]}{n[5]}-{n[6]}{n[7]}{n[8]}{n[9]}'
