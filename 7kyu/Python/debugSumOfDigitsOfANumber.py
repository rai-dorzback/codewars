'''
Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14

Original code:
def get_sum_of_digits(num):
    sum = None
    digits = list(num)
    for x in digits:
        sum + x
    return sum
'''

# My solution correcting theirs
def get_sum_of_digits(num):
    # instead of sum equalling None, have it equal 0 so we can add on
    sum = 0
    # separate the number into an array of digits. this doesn't work because integers aren't iterable
    digits = list(str(num))
    # for each digit in digits
    for x in digits:
        # add that digit to the sum. instead of just sum + x, we need to make it sum += x so it adds on. because we turned the number into an array of strings, we need to convert x back to an integer to add it onto the sum
        sum += int(x)
    return sum

# how i would have solved the problem
# use list comprehension to create an array of numbers
    # use sum() to sum them and return that
get_sum_of_digits2 = lambda n : sum([int(digit) for digit in str(n)])

print(get_sum_of_digits2(123)) # 6
print(get_sum_of_digits2(223)) # 7
print(get_sum_of_digits2(1337))# 14