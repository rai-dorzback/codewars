'''
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"
'''

# method 1
def odd_or_even(arr):
    if sum(arr) % 2 == 0:
        return 'even'
    return 'odd'

# method 2: same as 1 but condensing the conditional
def odd_or_even(arr):
    return 'even' if sum(arr) % 2 == 0 else 'odd'

# method 3: same but using a lambda function to put it all on one line
odd_or_even = lambda arr: 'even' if sum(arr) % 2 == 0 else 'odd'
