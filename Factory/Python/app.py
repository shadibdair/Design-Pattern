BaseClass=type("BaseClass",(object,),{})
C1 = type("C1",(BaseClass,),{"x":1})
C2 = type("C2",(BaseClass,),{"x":30})

def MyFactory(myBool):
    return C1() if myBool else C2()

m = MyFactory(True)
v = MyFactory(False)
print(m.x,v.x)

