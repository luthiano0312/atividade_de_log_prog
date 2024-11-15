function media() {
    let nota1 = Number(prompt("digita sua nota: "));
    let nota2 = Number(prompt("digita sua nota: "));
    let nota3 = Number(prompt("digita sua nota: "));
    let resultado = (nota1 + nota2 + nota3)/3
    alert(resultado);
}

function contarVogais() {
    let nome = String(prompt("digite seu nome: "))
    let vogais = ["a","e","i","o","u","á","é","í","ó","ú"];
    let VOGAIS = ["A","E","I","O","U","Á","É","Í","Ó","Ú"];
    let quantidadeVogais = 0;
    
    for (let i = 0; i < nome.length; i++) {
        if (vogais.includes(nome[i]) || VOGAIS.includes(nome[i])) {
            quantidadeVogais += 1;
        }
    }
    alert(quantidadeVogais)
}

function imPar() {
    let num = Number(prompt("digita sua nota: "));
    if (isNaN(num)) {
        alert("por favor digite novamente");
    }else {
        if (num%2) {
            alert("impar");
        }else {
            alert("par");
        }
    }
}
