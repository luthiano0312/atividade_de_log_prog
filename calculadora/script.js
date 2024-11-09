let display = document.getElementById("display");
let conta = ""
let conta_ = []
const numeros = ["0","1","2","3","4","5","6","7","8","9"]
const operacoes = ["+","-","x","÷"]
let tem = 0;
let temSinal = 0;
let sas = ""
let resultado = "";
let index = 0;

function addDisplay(valor) {
    //verifica se é um numero
    if (numeros.includes(valor)) {
        conta_.push(valor);
    }else {
        //verifica se é operação ou ponto
        if (numeros.includes(conta_[(conta_.length)-1])) {
            if (operacoes.includes(valor)) {
                let ultimoTermo = conta_.slice().reverse();
                for (let i = 0; i < ultimoTermo.length; i++) {
                    if (ultimoTermo[i] == "(-") {
                        temSinal = 1;
                    }
                }
                
                if (temSinal == 1) {
                    conta_.push(")");
                    temSinal = 0;
                }

                if (conta_[(conta_.length)-1] != "." && !operacoes.includes(conta_[(conta_.length)-1])) {
                    conta_.push(valor);
                }
            }
            if (valor == ".") {
                //adiciona o ponto no display
                let contaReversa = conta_.slice().reverse();
                tem = contaReversa.findIndex(i => operacoes.includes(i));
                // alert(tem)
                if (tem == -1) {
                    if (!conta_.includes(".")) {
                        conta_.push(valor);
                    }
                }else {
                    const termo = contaReversa.slice(0, tem)
                    if (!termo.includes(".")) {
                        conta_.push(valor);
                    }
                }
            }
        }
    }
    conta = conta_.join("");
    display.value = conta;
}

function resolver() {
    conta = conta.replaceAll("÷","/");
    conta = conta.replaceAll("x","*");
    resultado = eval(conta);
    display.value = resultado;
    conta = "";
    conta_ = [];
}

function limpar() {
    conta = "";
    conta_ = [];
    display.value = "";
}

function altSinal() {
    for (let i = 0; i < conta_.length; i++) {
        if (operacoes.includes(conta_[i])) {
            index = i
        }    
    }
    conta_.splice(index+1,0,"(-")
    conta = conta_.join("");
    display.value = conta;
}

function apagar() {
    conta_.pop()
    conta = conta_.join("");
    display.value = conta;
}