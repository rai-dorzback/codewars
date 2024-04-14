'''
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
'''

# method 1
def sort_array(a):
    # create sorted list of odd numbers
    odd = sorted(list(filter(lambda e : e % 2 != 0, a)))
    # map the original array. if the current element is even, leave it as is.
    # if its odd, make it the first element of odd (and pop it off)
    return list(map(lambda e: e if e % 2 == 0 else odd.pop(0), a))

# method 2
def sort_array(a):
    # create sorted list of odd numbers
    odd = sorted(list(filter(lambda e : e % 2 != 0, a)))
    return [e if e%2 == 0 else odd.pop(0) for e in a]
