'''
Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
'''

def open_or_senior(data):
    # create new list to contain whether they aer in senior or open
    new_data = []
    
    # loop through each pair in the data list
    for pair in data:
        
        # if they are older than 55 and their handicap is greater than 7, they are senior
        if pair[0] >= 55 and pair[1] > 7:
            new_data.append('Senior')
        
        else:
            new_data.append('Open')
    
    return new_data
