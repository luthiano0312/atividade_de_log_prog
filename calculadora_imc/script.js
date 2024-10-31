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

function darkMode() {
    //declarção das variaveis dos elementos do html
    let corpo = document.getElementById("corpo");
    let calculadora = document.getElementById("calculadora");
    let cabeca_calcu = document.getElementById("cabeca");
    let botao = document.getElementById("botao");
    let altura = document.getElementById("altura");
    let peso = document.getElementById("peso"); 
    let saidaImc = document.getElementById("saidaImc");
    let saidaClassificacao = document.getElementById("saidaClassificacao");
    let saidaRecomendado = document.getElementById("saidaRecomendado");
    let cabecaImc = document.getElementById("cabecaImc");
    let cabecaClassificacao = document.getElementById("cabecaClassificacao");
    let cabecarecomendado = document.getElementById("cabecaRecomendado");
    let botao_darkMode = document.getElementById("botao_darkMode");
    let cor = corpo.style.backgroundColor;

    if(cor == "rgb(9, 9, 9)") {
        //branco
        corpo.style.backgroundColor = "rgb(247, 247, 247)";

        calculadora.style.backgroundColor = "white";
        calculadora.style.boxShadow = "3px 3px 5px rgb(199, 199, 199)";

        cabeca_calcu.style.backgroundColor = "rgb(233, 233, 233)";
        cabeca_calcu.style.color = "black";

        botao.style.backgroundColor = "lightgrey";
        botao.style.color = "black";

        altura.style.backgroundColor = "white";
        altura.style.boxShadow = "0px 2px rgb(233, 233, 233)";

        peso.style.backgroundColor = "white"
        peso.style.boxShadow = "0px 2px rgb(233, 233, 233)";

        saidaImc.style.backgroundColor = "white";
        saidaClassificacao.style.backgroundColor = "white";
        saidaRecomendado.style.backgroundColor = "white";

        cabecaImc.style.color = "black";
        cabecaClassificacao.style.color = "black";
        cabecarecomendado.style.color = "black";

        botao_darkMode.style.backgroundColor = "rgb(233, 233, 233)",
        botao_darkMode.style.color = "black";
        botao_darkMode.innerText = "MODO ESCURO";

    }else {
        //preto
        corpo.style.backgroundColor = "rgb(9, 9, 9)";

        calculadora.style.backgroundColor = "rgb(20, 20, 20)";
        calculadora.style.boxShadow = "3px 3px 5px rgb(20, 20, 20)";

        cabeca_calcu.style.backgroundColor = "rgb(35, 35, 35)";
        cabeca_calcu.style.color = "lightgray";

        botao.style.backgroundColor = "rgb(40, 40, 40)";
        botao.style.color = "rgb(200, 200, 200)";

        altura.style.backgroundColor = "rgb(7, 7, 7)";
        altura.style.boxShadow = "0px 2px rgb(35, 35, 35)";

        peso.style.backgroundColor = "rgb(7, 7, 7)";
        peso.style.boxShadow = "0px 2px rgb(35, 35, 35)";

        saidaImc.style.backgroundColor = "rgb(20, 20, 20)";
        saidaClassificacao.style.backgroundColor = "rgb(20, 20, 20)";
        saidaRecomendado.style.backgroundColor = "rgb(20, 20, 20)";

        cabecaImc.style.color = "lightgray";
        cabecaClassificacao.style.color = "lightgray";
        cabecarecomendado.style.color = "lightgray";

        botao_darkMode.style.backgroundColor = "rgb(35, 35, 35)",
        botao_darkMode.style.color = "lightgray";
        botao_darkMode.innerText = "MODO CLARO";

    }
}
