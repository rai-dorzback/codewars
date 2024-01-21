'''
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
'''
// METHOD 1: apend to new list
def remove_every_other(my_list):
    newList = []
    for i in range(len(my_list)):
        if i % 2 == 0:
            newList.append(my_list[i])
    return newList

// METHOD 2: using list slicing
def remove_every_other(my_list):
    return my_list[::2]
