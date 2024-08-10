'''
Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :

[1,2,3,4]
the function should return :

[1,4,3,8]
'''

# method 1
def double_every_other(arr):
    result = []
    # initialize iterator
    i = 0
    # for each num in array
    for num in arr:
        # if that number's index is odd
        if i % 2 != 0:
            # add double that num to the result
            result.append(num * 2)
        # else
        else:
            # add the num to result
            result.append(num)
        # incerase iterator
        i += 1
    # return result
    return result