# Code 
```
BaseClass=type("BaseClass",(object,),{})
C1 = type("C1",(BaseClass,),{"x":1})
C2 = type("C2",(BaseClass,),{"x":30})

def MyFactory(myBool):
    return C1() if myBool else C2()

m = MyFactory(True)
v = MyFactory(False)
print(m.x,v.x)
```
---
# Important Notes:
* Classes must inherit from common base class, though not necessarily in Python.
* C/C++/Java require variable types be declared, thus is why a common Base Clsas is so important.
* Class created is determined by Function!

---
# Why?
* Allows program to determine which function to create
* Removes duplication of code within multiple classes
* Function may be able to access info classes could not

---
# @ClassMethod
* Why to call a class function (or method) WITHOUT having to creat an instance of the class

* code
```
class MyClass:
   @classmethod
   def printShadi(self):
     print"Shadi"

MyClass.printShadi()
```
* Output
```
- Shadi
```
---
# Back To Factory
* What if we had hunderds of subclasses?
    * Too many if statements
    * Difficylt to manage..

* Code 
```
BaseClass = type("BaseClass",(object,),{})

@classmethod
def Check1(self,myStr):
    return myStr == "Shadi"

@classmethod
def Check2(self,myStr):
    return myStr == "sandwich"

C1=type("C1",(BaseClass,),{"x":1,"Check":Check1})
C2=type("C2",(BaseClass,),{"x":30,"Check":Check2})

def MyFactor(myStr):
    for cls in BaseClass.__subclasses__():
        if cls.Check(myStr):
            return cls()


    
m = MyFactor("Shadi")
v = MyFactor("sandwich")
print(m.x,v.x)

```

* Output 
```
1 30
```