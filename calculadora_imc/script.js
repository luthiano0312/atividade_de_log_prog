function calcular() {
    // pega os valores do input
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let imc = peso/(altura**2);

    //limpa os output 
    document.getElementById("saidaImc").value = "";
    document.getElementById("saidaClassificacao").value = "";
    document.getElementById("saidaRecomendado").value = "";

    //verifica se foi colocado numeros no input
    if(isNaN(imc)){
        document.getElementById("saidaImc").value = "";
    }else {
        document.getElementById("saidaImc").value = String(imc.toFixed(2));
    }
    
    //saida da clasicicação 
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

    //recomendação para peso ideal baseado na altura do usuário
    let pesoIdeal = 22*altura**2
    if (pesoIdeal != 0){
        document.getElementById("saidaRecomendado").value = String(pesoIdeal.toFixed(2));
    }   
}