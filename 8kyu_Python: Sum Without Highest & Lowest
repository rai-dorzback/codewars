'''
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
'''

# METHOD 1
def sum_array(arr):
    if arr:
        arr = sorted(arr)
        return sum(arr[1:-1])
    return 0

# METHOD 2: more concise method 1
def sum_array(arr):
    return sum(sorted(arr)[1:-1]) if arr else 0

# METHOD 3: lambda version, most concise
sum_array = lambda arr : sum(sorted(arr)[1:-1]) if arr else 0
