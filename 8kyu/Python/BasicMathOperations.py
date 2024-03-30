'''
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
'''
# METHOD 1: CONDITIONALS
def basic_op(op, a, b):
    if op == '+':
        return a+b
    elif op == '-':
        return a-b
    elif op == '*':
        return  a*b
    elif op == '/':
        return a/b
    else:
        return 'Invalid operator'

# METHOD 2: lambda and using eval() build in method
basic_op = lambda op, a, b: eval(f'{a}{op}{b}')
