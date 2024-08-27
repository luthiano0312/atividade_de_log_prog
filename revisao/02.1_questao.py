def operar(operador,num):
    sequencia = []

    for x in range(0,len(num)):
        sequencia.append(str(num[x]))
        sequencia.append(operador)
    sequencia.pop(len(sequencia)-1)

    resultado = "".join(sequencia)

    print(f"{resultado} = {eval(resultado)}")

operacao = ("+","-","*","/","**")

while True:
    lista_termos = []
    operador = str(input("qual operação deseja fazer? "))
    if operador not in operacao:
        print("digite um valor válido")
        continue
    try:
        termos = int(input("e com quantos números deseja fazer? "))
    except:
        print("digite um valor válido")
        continue

    try:
        for x in range(0,termos):
            lista_termos.append(int(input("digite o numero: ")))
    except:
        print("digite um valor válido")
        continue

    operar(operador,lista_termos)

    resposta = input("deseja fazer outra operação? ")
    if resposta.lower == "nao":
        break
