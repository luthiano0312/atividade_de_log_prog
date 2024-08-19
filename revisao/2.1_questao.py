
def lerNumero(exibir):
    return(int(input(str(exibir))))

def operacao(operador,*num):
    seq = []

    for x in range(0,len(num)):
        seq.append(str(num[x]))
        seq.append(operador)       
    seq.pop(len(seq)-1)

    resultado = "".join(seq)

    print(f"{resultado} = {eval(resultado)}")
    
num1 = lerNumero("digite um numero: ")
num2 = lerNumero("digite outro numero: ")
num3 = lerNumero("digite outro numero: ")

print(" ")

operacao("+",num1,num2,num3,)
operacao("-",num1,num2)
operacao("*",num1,num2,num3)
operacao("/",num1,num2)
operacao("**",num1,num2)


