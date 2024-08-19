'''
Fix the bug in Filtering method
The method is supposed to remove even numbers from the list and return a list that contains the odd numbers.

However, there is a bug in the method that needs to be resolved.

ORIGINAL CODE
def kata_13_december(lst): 
    # Fix this code
    for i in range(len(lst)): 
        if lst[i]%2==0: 
            lst.remove(i)
    return lst
'''

# solution 1
def kata_13_december(lst): 
    res = []
    for i in range(len(lst)): 
        if lst[i]%2!=0: 
            res.append(lst[i])
    return res

# solution 2
def kata_13_december(arr):
    return [x for x in arr if x%2]