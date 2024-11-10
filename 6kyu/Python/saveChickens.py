'''
Story
Chickens at the poultry farm are kept in numbered cages that stand in a row. A certain number of chickens are regularly turned into nuggets.
The selection of chickens is carried out according to the rules:
- every Nth (for example 5th, 7th or 11th) cage is selected from a row;
- after reaching the end of the row, the counting continues from the beginning of the row;
- already selected cages are not counted;
- this continues until the desired number of chickens is selected.
For example, if you select every 5th cage out of 6 and 2 chickens need to be left untouched, chickens from cages #2, #4, #5 and #6 will be sent to the kitchen (see ASCII pics below).
A poultry farm worker wants to save some chickens with a rare feather color from death. Help the worker choose the cages in which the chickens will survive.
Task
Write a function that takes an array with the numbers of cages (length of input array 'cages' is always greater than zero, don't mutate 'cages'), the number according to which the cage is selected (number 'nth' is always greater than zero) and the number of chickens that will be saved (number 'save' is greater than or equal to zero). The function should return an array with the numbers of safe cages.
save_chickens(cages=[1, 2, 3, 4, 5, 6], nth=5, save=2) -> [1, 3]
'''

# arr of cages, num of cages before we select one, num of chickens that will be saved -> arr with the nums of the safe cages
def save_chickens(cages, n, num_saved):
    # cagesLeft: arr of cages that haven't been selected yet to count thru
    cages_left = cages.copy()
    index = 0
    # while loop thru cages_left, stop it when the num of cages left is the num of chickens saved
    while len(cages_left) > num_saved:
        # add n to index and subtract by 1 to account for zero indexing, modulus length of cages_left so that it cycles thru the list
        index = (index + n - 1) % len(cages_left)
        # remove item from cagesLeft
        cages_left.pop(index)
    return cages_left

print(save_chickens([1, 2, 3, 4, 5, 6], 5, 2)) # [1, 3]
'''
[1, 2, 3, 4, X, 6]
[1, 2, 3, X, X, 6]
[1, 2, 3, X, X, X]
[1, X, 3, X, X, X]
[1, 3]
'''
print(save_chickens([1, 2, 3, 4, 5, 6, 7], 3, 4)) # [1, 4, 5, 7]
'''
[1, 2, X, 4, 5, 6, 7]
[1, 2, X, 4, 5, X, 7]
[1, X, X, 4, 5, X, 7]
[1, 4, 5, 7]
'''