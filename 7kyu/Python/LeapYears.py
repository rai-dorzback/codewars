'''
In this kata you should simply determine, whether a given year is a leap year or not.
In case you don't know the rules, here they are:

Years divisible by 4 are leap years,
but years divisible by 100 are not leap years,
but years divisible by 400 are leap years.
Tested years are in range 1600 ≤ year ≤ 4000.
'''

# METHOD 1
def is_leap_year(year):
    return (year % 100 != 0 and year % 4 == 0) or year % 400 == 0 # will return a boolean of whether this condition is true or not

# METHOD 2: method 1 but lambda
is_leap_year = lambda year : (year % 100 != 0 and year % 4 == 0) or year % 400 == 0
