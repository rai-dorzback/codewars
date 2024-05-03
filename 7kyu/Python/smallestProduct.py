'''
Given a non-empty array of non-empty integer arrays, multiply the contents of each nested array and return the smallest total.

Example
input = [
  [1, 5],
  [2],
  [-1, -3]
]

result = 2
'''

# method 1
import numpy
def smallest_product(a):
    # map original array to products of each nested array, return minimum
    return min(list(map(lambda x : numpy.prod(x), a)))

# method 2: same as method 1 but using lambda
import numpy
smallest_product = lambda a: min(list(map(lambda x : numpy.prod(x), a)))
