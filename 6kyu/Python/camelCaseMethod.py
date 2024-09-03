'''
Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
'''

# solution 1
def camel_case(s):
    resArray = s.title().split()
    res = ''
    for word in resArray:
        res += word
    return res

# solution 2
def camel_case(s):
    return s.title().replace(" ", "")