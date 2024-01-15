'''
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, 
comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the 
one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to 
write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are 
multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, 
return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
'''
# METHOD 1
def remove_smallest(numbers):
    # place to store new list
    newList = []
    
    # place to store minimum ratings list
    minRatingsList = []
    
    # variable for minimum rating, set default to empty list
    minRating = min(numbers, default=[]) 
    
    # add numbers that aren't the minimum to new list
    for num in numbers:
        if num != minRating:
            newList.append(num)
        
        # if it is the minimum, add to list of minimums
        else:
            minRatingsList.append(num)
    
    if len(minRatingsList) > 1:
        # add min to newList same amount of times as the length of the list minus one
        for i in range(len(minRatingsList) - 1):
            newList.append(minRatingsList[0])
    
    return newList

  # METHOD 2: way simpler
  def remove_smallest(numbers):
    # create a copy of the numbers list
    newList = numbers[:]
    
    # if the list has values
    if newList:
        # remove the minimum value
        newList.remove(min(newList))
    
    return newList
