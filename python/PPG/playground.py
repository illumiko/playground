import math
def test():
     # List compresion
     # healthy = ['broccoli', 'begun', 'milk']
     # fridge = ['burger', 'fries', 'humanBody', 'water', 'milk']
     # # fridge[:] = [item for item in fridge if item in healthy]
     # filteredFridge = [i.upper() for i in fridge if i in healthy]
     # # for item in fridge:
     # #     if item in healthy:
     # #         filteredFridge.append(item)
     # # the lsit compresion shortens this to [item for item in fridge if item in healthy]
     # print(filteredFridge)












     # print('welcome to month converted')
     # uInput = int(input("Enter number of days: "))
     # # months = uInput / 30 
     # # days = uInput % 30
     # print('Months = %2d Days= %d' % (divmod(uInput, 30)))




















     #Evaluation of 1/(x+n)....{x = 1, n =11}
     # sum = 0.0
     # for i in range(1,11):
     #     sum += 1.0 / i
     #     print(i, sum)

     # quadratic formulae
     # a = int(input('Enter a number: '))
     # b = int(input('Enter a number: '))
     # c = int(input('Enter a number: '))
     # d = (b * b) - (4*a*c)
     # if d < 0:
     #     print('get off my lawn')
     # else:
     #     root1 = (-b + math.sqrt(d)) / 2*a
     #     root2 = (-b - math.sqrt(d)) / 2*a
     #     # print("Root1:", root1)
     #     # print("Root2:", root2)
     #     print(f"root 1: {root1}\nroot 2: {root2}")
     # print('test')
    a = 0
    k = 0
    while a != 10 and k != 5:
        k+=1
        a+=1
        print(a,k)

test()

# def ifNum():
#      number = int(input("Enter an integer: "))
#      if number < 0:
#          print('negative num')
#      else:
#          print('positve num')
#  #ifNum()
#
# def invesment():
#      amount = float(input('enter amount: '))
#      interest = 0.20
#      period = int(input('enter time: '))
#      year = 0
#    
#      while year <= period:
#          value = amount + (amount * interest)
#          amount = value
#          print("Year %x Rs. %2a" % (year, value))
#          year= year + 1
#  # invesment()
"""""
class TalkingOs():
    import os
    def __init__(self):
        pass
    def osInteract(self):
        self.os.ctermid()

hmm = TalkingOs()
print(hmm.osInteract())
"""""
