'''
You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.
The array is unsorted.
An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. # should return 3
'''
# METHOD 1
def find_dup(arr):
    for elem in arr:
        if arr.count(elem) == 2:
            return elem

# METHOD 2: more concise, on one line
find_dup = lambda arr: [elem for elem in arr if arr.count(elem) == 2][0]
