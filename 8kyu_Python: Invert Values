'''
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
'''

# METHOD 1
def invert(l):
    new = []
    for num in l:
        if num > 0:
            new.append(int(f'-{num}'))
        else:
            new.append(abs(num))
    return new

# METHOD 2
invert = lambda l: [-num for num in l]
