'''
You take your son to the forest to see the monkeys. You know that there are a certain number 
there (n), but your son is too young to just appreciate the full number, he has to start 
counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array 
with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):
10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
1 --> [1]
'''

# METHOD 1: for loop to populate new array count
def monkey_count(n):
    count = []
    for i in range(1, n+1):
        count.append(i)
    return count

# METHOD 2: shorted version of the for loop
monkey_count = lambda n : [i for i in range(1, n+1)]

# METHOD 3: using list and range
monkey_count = lambda n : list(range(1, n+1))
