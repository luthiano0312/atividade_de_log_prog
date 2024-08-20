
def lerNumero(exibir):
    return(int(input(str(exibir))))

def operacao(operador,num):
    seq = []

    for x in range(0,len(num)):
        seq.append(str(num[x]))
        seq.append(operador)       
    seq.pop(len(seq)-1)

    resultado = "".join(seq)

    print(f"{resultado} = {eval(resultado)}")

while True:
    operador = "+"#str(input("qual operação deseja fazer? "))

    termos = 2#int(input("e com quantos números deseja fazer? "))

    lista_termos = []

    for x in range(0,termos):
        lista_termos.append(2)#int(input("digite o numero: ")))

    operacao(operador,lista_termos)

    resposta = input("deseja fazer outra operação? ")
    if resposta.lower == "não" or "nao":
        break
