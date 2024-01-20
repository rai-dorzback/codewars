'''
Write a function that merges two sorted arrays into a single one. 
The arrays only contain integers. Also, the final outcome must be 
sorted and not have any duplicate.
'''

# function to add items to list
def appendToList(ogList, finalList):
    for i in ogList:
        if i not in finalList:
            finalList.append(i)

def merge_arrays(first, second): 
    list = []
    
    # append first and second to list
    appendToList(first, list)
    appendToList(second, list)
    
    # sort list
    return sorted(list)
