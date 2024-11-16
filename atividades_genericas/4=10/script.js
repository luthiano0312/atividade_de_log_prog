let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
let num3 = document.getElementById("num3").value;
let num4 = document.getElementById("num4").value;
let conta = "";
let oper1 = "";
let oper2 = "";
let oper3 = "";
let oper4 = "";
let operCombi = []

const operacoes = ["+","-","*","/"];
const numeros = [num1,num2,num3,num4];
const opers = []

function combinacoes() {
    for (let i = 1; i <= 4; i++) {
        oper1 = i;
        for (let i = 1; i <= 4; i++) {
            oper2 = i;
            for (let i = 1; i <= 4; i++) {
                oper3 = i;
                for (let i = 1; i <= 4; i++) {
                    oper4 = i;
                    operCombi = oper1 + oper2 + oper3 + oper4;
                    return operCombi;
                }
            }
        }
    }
}

console.log(combinacoes());
console.log(combinacoes());

