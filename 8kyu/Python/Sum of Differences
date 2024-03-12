'''
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0
'''

def sum_of_differences(arr):
    # sort array of numbers
    arr.sort(reverse=True)
    i = 0 
    sum = 0
    while i < len(arr) - 1:
        sum += arr[i] - arr[i + 1]
        i += 1
    return sum

nums = [2, 10, 1]
print(sum_of_differences(nums))
