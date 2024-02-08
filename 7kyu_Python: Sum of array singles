'''
In this Kata, you will be given an array of numbers in which two numbers occur once 
and the rest occur only twice. Your task will be to return the sum of the numbers that 
occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, 
and their sum is 15. Every other number occurs twice.
'''

# METHOD 1: add each single to variable sum
def repeats(l):
    sum = 0
    for i in l:
        if l.count(i) == 1:
            sum += i
    return sum

'''
METHOD 2: using list comprehension to make the code more concise. also used sum() 
built in function to add the items in the list that was formed with list comprehension
'''
repeats = lambda l : sum([i for i in l if l.count(i) == 1])

# slightly more readable version with changed variable names 
repeats = lambda list : sum([num for num in list if list.count(num) == 1])

# METHOD 3: create list of singles and sum it -- could do this with method 2 instead if wanted to use lambda and list comp
def repeats(l):
    singles = []
    for num in l:
        if l.count(num) == 1:
            singles.append(num)
    return sum(singles)
