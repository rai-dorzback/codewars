'''
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
'''
# METHOD 1
def summation(n):
    return sum(range(1, n+1))

# METHOD 2: method 1 but lambda
summation = lambda n: sum(range(1, n+1))

# METHOD 3
def summation(num):
    sum = 0
    x = range(1, num+1)
    for i in x:
        sum += i
    return sum
