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
