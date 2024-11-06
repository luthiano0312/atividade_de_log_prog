let soma = o;
while(true) {
    let num = Number(prompt("digite um numero: "));
    if (num == 0) {
        break
    }
    soma += num;
}
alert(soma);