function calcular() {
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;

    let imc = peso/(altura**2);

    if(typeof imc == typeof 1){
        document.getElementById("saidaImc").value += String(imc);
    }else {
        document.getElementById("saidaImc").value += "";
    }
    

    if(imc <= 18.5) {
        document.getElementById("saidaClassificacao").value += "abaixo do peso";
    } else if(imc > 18,5 && imc < 25) {
        document.getElementById("saidaClassificacao").value += "peso normal";
    } else if(imc >= 25 && imc < 30) {
        document.getElementById("saidaClassificacao").value += "excesso de peso";
    } else if(imc >= 30 && imc < 35) {
        document.getElementById("saidaClassificacao").value += "obesidade classe I";
    } else if(imc >= 35 && imc < 40) {
        document.getElementById("saidaClassificacao").value += "obesidade classe II";
    } else if(imc > 40) {
        document.getElementById("saidaClassificacao").value += "obesidade classe III";
    }else {
        document.getElementById("saidaClassificacao").value += "";
    }
}

