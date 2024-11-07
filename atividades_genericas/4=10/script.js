let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
let num3 = document.getElementById("num3").value;
let num4 = document.getElementById("num4").value;
let conta = ""

const operacoes = ["+","-","*","/"];
const numeros = [num1,num2,num3,num4];

function combinacoes() {
    operacoes.forEach((item) => conta = num1 + item);
    alert(conta);
}