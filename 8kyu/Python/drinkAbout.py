'''
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
'''
# method 1
def people_with_age_drink(a):
    if a < 14:
        return 'drink toddy'
    elif a < 18:
        return 'drink coke'
    elif a < 21:
        return 'drink beer'
    else:
        return 'drink whisky'

# method 2
def people_with_age_drink(a):
    str = 'drink '
    str += ('toddy' if a < 14 else 'coke' if a < 18 else 'beer' if a < 21 else 'whisky')
    return str
