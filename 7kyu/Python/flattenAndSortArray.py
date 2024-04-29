'''
Challenge:
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
'''

# method 1
def flatten_and_sort(a):
    flat = []
    for arr in a:
        for e in arr:
            flat.append(e)
    return sorted(flat)

# method 2: use list comprehension & lambda function so it's all on one line
flatten_and_sort = lambda a: sorted([e for arr in a for e in arr])
