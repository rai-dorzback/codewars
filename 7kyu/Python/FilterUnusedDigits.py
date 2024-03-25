'''
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:
[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.
'''
# METHOD 1
def unused_digits(*numbers):
    allDigits = '0123456789'
    result = ''
    numbers = str(numbers)
    
    for num in allDigits:
        if num not in numbers:
            result += num
    return result

# METHOD 2
def unused_digits(*numbers):
    # if the number from all digits is not in the string version of the arguments, join and return it
    return "".join(number for number in "0123456789" if number not in str(numbers))
