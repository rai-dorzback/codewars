'''
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
'''

# METHOD 1
def fizzbuzz(n):
    arr = []
    for i in range(1, n+1):
        if i % 3 == 0 and i % 5 == 0:
            arr.append('FizzBuzz')
        elif i % 3 == 0:
            arr.append('Fizz')
        elif i % 5 == 0:
            arr.append('Buzz')
        else:
            arr.append(i)
    return arr

# METHOD 2: list comprehension
def fizzbuzz(n):
    return ['FizzBuzz' if i % 3 == 0 and i % 5 == 0 
     else 'Fizz' if i % 3 == 0
     else 'Buzz' if i % 5 == 0
     else i
     for i in range(1, n+1)]

# METHOD 3: lambda & list comprehension
fizzbuzz = lambda n : ['FizzBuzz' if i % 3 == 0 and i % 5 == 0 
     else 'Fizz' if i % 3 == 0
     else 'Buzz' if i % 5 == 0
     else i
     for i in range(1, n+1)]
