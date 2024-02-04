'''
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]
'''

# METHOD 1: concatenate two lists. the first list is a filtered list of all non-zero values, the second is a filtered list of all zero values
def move_zeros(l):
    return list(filter(lambda e : e != 0, l)) + list(filter(lambda e : e == 0, l))

# METHOD 2: method 1 just on one line
move_zeros = lambda l: list(filter(lambda e : e != 0, l)) + list(filter(lambda e : e == 0, l))

# METHOD 3
def move_zeros(l):
    for i in l:
        if i == 0:
            l.remove(i) # Remove the element from the array
            l.append(i) # Append the element to the end
    return l
