'''
You have to do God's job. The creation method must return an array of length 2 
containing objects (representing Adam and Eve). The first object in the array 
should be an instance of the class Man. The second should be an instance of the 
class Woman. Both objects have to be subclasses of Human. Your job is to implement 
the Human, Man and Woman classes.
'''

def God():
    # instantiate Eve 
    eve = Woman('eve')
    
    # instantiate Adam
    adam = Man('adam')
    
    return [adam, eve]

class Human():
    def __init__(self, name):
        self.name = name

class Man(Human):
    def __init__(self, name):
        super().__init__(name)

class Woman(Human):
    def __init__(self, name):
        super().__init__(name)

print(God())
