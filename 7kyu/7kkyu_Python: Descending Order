'''
Your task is to make a function that can take any non-negative integer as an argument and 
return it with its digits in descending order. Essentially, rearrange the digits to create 
the highest possible number.

Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
'''

# METHOD 1
def descending_order(num):
    # turn the number into a string, turn that into a list -> list(str(num))
    # turn each number into an integer using map, turn it into a list, then sort it reversed
    descendingListOfIntegers = sorted(list(map(lambda n: int(n), list(str(num)))), reverse=True)
    # turn each item to a string so you can join it into one number, then convert to integer
    return int("".join(list(map(lambda n: str(n), descendingListOfIntegers))))

# METHOD 2
def descending_order(num):
    # can sort the list without turning each item into a number first, then join it, then turn into an integer. way less steps
    return int("".join(sorted(list(str(num)), reverse=True)))

# METHOD 3: method 2 but a lambda function
descending_order = lambda num : int("".join(sorted(list(str(num)), reverse=True)))
