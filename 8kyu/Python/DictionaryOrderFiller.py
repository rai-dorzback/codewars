'''
You're running an online business and a big part of your day is fulfilling orders. 
As your volume picks up that's been taking more of your time, and unfortunately lately 
you've been running into situations where you take an order but can't fulfill it.

You've decided to write a function fillable() that takes three arguments: a dictionary 
stock representing all the merchandise you have in stock, a string merch representing 
the thing your customer wants to buy, and an integer n representing the number of units 
of merch they would like to buy. Your function should return True if you have the
merchandise in stock to complete the sale, otherwise it should return False.

Valid data will always be passed in and n will always be >= 1.
'''

# METHOD 1
def fillable(stock, merch, n):
    # if they have that item at all
    if merch in stock:
        # get the quantity they have
        quantityLeft = stock.get(merch)
        
        # if there is more than or equal to the amount requested, return True
        if quantityLeft >= n:
            return True
    return False

# METHOD 2
def fillable(stock, merch, n):
    # return a boolean indicating whether the merch is both an item in the stock dictionary and has more than or equal to the amount needed
    return merch in stock and stock.get(merch) >= n

# METHOD 3: method 2 but using lambda
fillable = lambda stock, merch, n: merch in stock and stock.get(merch) >= n
