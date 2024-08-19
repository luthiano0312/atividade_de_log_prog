aluno = input("digite seu nome: ")
disciplina = input("digite a disciplina: ")
nota = float(input("digite sua nota: "))

if 0 <= nota <= 10:
    if 0 <= nota <= 5.4:
        print(f"{aluno} esta reprovado em {disciplina} com nota {nota}")
    elif 5.5<= nota <= 5.9:
        print(f"{aluno} esta aprovado em {disciplina} com nota 6")
    else:
        print(f"{aluno} esta aprovado em {disciplina} com nota {nota}")
else:
    print("nota inválida")
