
def operacao(operador):
    n1 = input("digite a: ")
    n2 = input("digite b: ")
    resultado = n1 + str(operador) + n2
    print(f"{n1} {operador} {n2} = {eval(resultado)}")

while True:
    print('''
    qual operação deseja fazer?  

    1 - Soma.
    2 - Subtração.
    3 - Multiplicação.
    4 - divisão.
    5 - potenciação.
    6 - sair.
          
    ''')

    op = input("op: ")
    print("")

    if op == "1":
        operacao("+")
    elif op == "2":
        operacao("-")
    elif op == "3":
        operacao("*")
    elif op == "4":
        operacao("/")
    elif op == "5":
        operacao("**")
    elif op == "6":
        print("operação finalizada.")
        break
    else:
        print("valor inválido, tente novamente.")
