'''
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1,2,3,10,5]) # should return [1,2,3,5,10]
solution(None) # should return []
'''

# method 1
def solution(n):
    # sort in ascending order if n is truthy, else empty array
    return sorted(n) if n else []

# method 2: same as 1 but using lambda
solution = lambda n: sorted(n) if n else []
