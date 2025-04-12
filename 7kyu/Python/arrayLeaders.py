# https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/python

# SOLUTION 1: backwards for loop
def array_leaders(nums):
    leaders = []
    sum = 0
    for i in range(len(nums)-1, -1, -1):
        if nums[i] > sum:
            leaders.append(nums[i])
        sum += nums[i]
    leaders.reverse()
    return leaders
    
print(array_leaders([2, 8, 5]), [8, 5])

# SOLUTION 2: for loop through backwards nums
def array_leaders(nums):
    leaders = []
    sum = 0
    for i in reversed(nums):
        if i > sum:
            leaders.append(i)
        sum += i
    leaders.reverse()
    return leaders
    
print(array_leaders([2, 8, 5]), [8, 5])