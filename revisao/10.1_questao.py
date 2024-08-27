
def operar(operador):
    n1 = input("digite a: ")
    n2 = input("digite b: ")
    resultado = n1 + str(operador) + n2
    print(f"{resultado} = {eval(resultado)}")

operacao = {
    "1": "+",
    "2": "-",
    "3": "*",
    "4": "/",
    "5": "**",
}

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

    if op in operacao:
        operar(operacao[op])
    elif op == "6":
        print("bye")
        break
    else:
        print("digite um valor válido ")

