'''
A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].
Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.

Example:

a=[1,2,0,3]
a.length-1=3 
a includes [0,3] ,hence the function should return true
'''

def is_all_possibilities(l):
    if len(l) < 1:
        return False
    l.sort()
    for i in range(len(l)):
        # if the item is not equal to the index, return False
        if l[i] != i:
            return False
    # otherwise return True
    return True
