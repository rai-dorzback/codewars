"""
Prompt:
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
"""
def better_than_average(class_points, your_points):
    # add your score to list of class's score
    class_points.append(your_points)
    
    # find how many scores are in the list
    num_of_scores = len(class_points)
    
    # sum of items in list
    sum_of_scores = sum(class_points)
    
    # calculate average of class_points
    class_average = sum_of_scores / num_of_scores
    
    # compare your score
    if your_points > class_average:
        return True
    else:
        return False
    
    # if yours is better, return True
    # else, return False
