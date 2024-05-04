'''
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
'''

# method 1
def find_average(nums):
  # return average by summing the nums array, dividing by length of array if the array has at least 1 element in it, else return zero
    return sum(nums)/len(nums) if len(nums) > 0 else 0

# method 2: using lambda
find_average = lambda nums : sum(nums)/len(nums) if len(nums) > 0 else 0
