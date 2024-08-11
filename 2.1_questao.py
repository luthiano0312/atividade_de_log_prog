
def lerNumero(exibir):
    return(int(input(str(exibir))))

def termos(x):
    seq = []
    if x > 1:
        for x in range(x):
            seq.append("0")
    else:
        return(0)
    return(seq)

def sequencia(lista):
    if lista != 0:

        for x in range(len(lista)):
            lista.insert(1+x*2,"1")

        lista.pop(len(lista)-1)

        sequencia_string = "".join(lista)
        return(sequencia_string)
    else:
        return(0)

def operacao(operador,*num):
    resul = ""
    resultado = sequencia(termos(len(num))).replace("1"," " + operador + " ")
    
    resultadoSeparado = resultado.split(" ")
    cont = 0
    for x in range(len(resultadoSeparado)):
        
        if x % 2 == 0:
            resultadoSeparado.pop(x)
            resultadoSeparado.insert(x,str(num[cont]))
            cont += 1
        
    resultadoReal = resul.join(resultadoSeparado)
        
    print(f"{resultadoReal} = {eval(resultadoReal)}")
    
num1 = lerNumero("digite um numero: ")
num2 = lerNumero("digite outro numero: ")
num3 = lerNumero("digite outro numero: ")

print(" ")

operacao("+",num1,num2,num3,)
operacao("-",num1,num2)
operacao("*",num1,num2,num3)
operacao("/",num1,num2)
operacao("**",num1,num2)


