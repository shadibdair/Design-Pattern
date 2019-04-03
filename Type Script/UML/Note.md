```
What is UML
```
```
The Unified Modeling Language (UML) is a general-purpose, developmental, modeling language in the field of software engineering that is intended to provide a standard way to visualize the design of a system.
```

```
-------------------------------------------------------------------------
```

```
Singleton Design Pattern
```
```
In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one "single" instance. This is useful when exactly one object is needed to coordinate actions across the system. The term comes from the mathematical concept of a singleton.

Critics consider the singleton to be an anti-pattern in that it is frequently used in scenarios where it is not beneficial, introduces unnecessary restrictions in situations where a sole instance of a class is not actually required, and introduces global state into an application.
```

```
-------------------------------------------------------------------------
```
```
How to implement a singleton class?
The following program demonstrates the implementation of singleton class where it prints the instances created multiple times.
```
```
The code:
```
```
class Singleton:
    __instance = None
    @staticmethod

    def getInstance():
        """ Static access method """
        if Singleton.__instance == None:
            Singleton()
        return Singleton.__instance

    def __init__(self):
        """ Virtually private constructor """ 
        if Singleton.__instance != None:
            raise Exception("This class is Singleton")
        else:
            Singleton.__instance = self

s = Singleton()
print(s)

s= Singleton.getInstance()
print(s)

s = Singleton.getInstance()
print(s)

# The number of instances created are
# same and there is no difference in the objects listed in output.
```
```
The Output:
```
```
<__main__.Singleton object at 0x00F70D70>
<__main__.Singleton object at 0x00F70D70>
<__main__.Singleton object at 0x00F70D70>
```
```
-------------------------------------------------------------------------
```
