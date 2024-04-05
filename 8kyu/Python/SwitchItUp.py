'''
When provided with a number between 0-9, return it in words.

Input :: 1
Output :: "One".

If your language supports it, try using a switch statement.
'''

# METHOD 1
switch_it_up = lambda n: ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'][n]

# METHOD 2
def switch_it_up(n):
    nums = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    return nums[n]
