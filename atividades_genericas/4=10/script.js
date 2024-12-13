

function testaCombinacoes() {

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    let posNum = "abcd";
    let num = "";
    let posOper = "abc";
    let oper = "";
    let posCont = "abcdefg"
    let conta = ""

    const operacoes = ["+","-","*","/"];
    const numeros = [num1,num2,num3,num4];
    const combinacoesNUM = [];
    const combinacoesOPER = [];
    const combinacoesCONTA = [];
    const contaCerta = [];

    function combinacoesNum() {
        for (let a = 0; a < numeros.length; a++) {
    
            for (let b = 0; b < numeros.length; b++) {
    
                for (let c = 0; c < numeros.length; c++) {
    
                    for (let d = 0; d < numeros.length; d++) {
    
                        if (a != b && a != c && a != d) {
                            if (b != c && b != d) {
                                if (c != d) {
                                    num = posNum.replace("a",numeros[a]).replace("b",numeros[b]).replace("c",numeros[c]).replace("d",numeros[d]);
                                    combinacoesNUM.push(num);
                                }
                            }
                        }
    
                    }
                }
            }
        }
    }
    
    function reduz() {
        for (let a = 0; a < combinacoesNUM.length; a++) {
            for (let b = 0; b < combinacoesNUM.length; b++) {
    
                if (a != b) {
                    if (combinacoesNUM[a] == combinacoesNUM[b]) {
                        combinacoesNUM.splice(b,1);
                    } 
                }
    
            }    
        }
    }
    
    function combinacoesOper() {
        for (let a = 0; a < operacoes.length; a++) {
    
            for (let b = 0; b < operacoes.length; b++) {
    
                for (let c = 0; c < operacoes.length; c++) {    
    
                    oper = posOper.replace("a",operacoes[a]).replace("b",operacoes[b]).replace("c",operacoes[c]);
                    combinacoesOPER.push(oper);
    
                }
            }
        }
    }
    
    function combinacoesConta() {
        for (let a = 0; a < combinacoesNUM.length; a++) {
    
            for (let b = 0; b < combinacoesOPER.length; b++) {
    
                conta = posCont.replace("a",combinacoesNUM[a][0]).replace("b",combinacoesOPER[b][0]).replace("c",combinacoesNUM[a][1]).replace("d",combinacoesOPER[b][1]).replace("e",combinacoesNUM[a][2]).replace("f",combinacoesOPER[b][2]).replace("g",combinacoesNUM[a][3])
                combinacoesCONTA.push(conta);
    
            }
        }
    }
    
    function validacao() {
        for (let i = 0; i < combinacoesCONTA.length; i++) {
            if (eval(combinacoesCONTA[i]) == 10) {
                contaCerta.push(combinacoesCONTA[i]);
            }
            
        }
    }
    
    combinacoesNum();
    reduz();
    combinacoesOper();
    combinacoesConta();
    validacao();

    console.log(contaCerta);
}


