'''
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It 
must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
'''
# METHOD 1: lambda function, ternary if/else statement to put whole thing on one line
likes = lambda n : 'no one likes this' if len(n) == 0 else f'{n[0]} likes this' if len(n) == 1 else f'{n[0]} and {n[1]} like this' if len(n) == 2 else f'{n[0]}, {n[1]} and {n[2]} like this' if len(n) == 3 else  f'{n[0]}, {n[1]} and {len(n) - 2} others like this';

# METHOD 2: if/else statement just written more readably
def likes(n):
    if len(n) == 0:
        return("no one likes this")
    elif len(n) == 1:
        return(f"{n[0]} likes this")
    elif len(n) == 2:
        return(f"{n[0]} and {n[1]} like this")
    elif len(n) == 3:
        return(f"{n[0]}, {n[1]} and {n[2]} like this")
    else:
        return(f"{n[0]}, {n[1]} and {len(n)-2} others like this")
