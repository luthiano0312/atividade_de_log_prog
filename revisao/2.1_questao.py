
def operacao(operador,num):
    sequencia = []

    for x in range(0,len(num)):
        sequencia.append(str(num[x]))
        sequencia.append(operador)
    sequencia.pop(len(sequencia)-1)

    resultado = "".join(sequencia)

    print(f"{resultado} = {eval(resultado)}")

while True:
    operador = str(input("qual operação deseja fazer? "))

    termos = int(input("e com quantos números deseja fazer? "))

    lista_termos = []

    for x in range(0,termos):
        lista_termos.append(int(input("digite o numero: ")))

    operacao(operador,lista_termos)

    resposta = input("deseja fazer outra operação? ")
    if resposta.lower == "não" or "nao":
        break
