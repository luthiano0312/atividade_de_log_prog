// manipulação do HTML com propriedades

// document.getElementById('input').value; retorna o valor de um elemente do HTML
function funcaoValor() {
    // pega o valor do input
    let valor = document.getElementById('input1').value;

    // exibe o valor no console
    console.log(valor);    
}

// tambem é possivel alterar um valor com o document.getElementById('input').value;
function funcaoAdicionaValor() {
    // adiciona ao valor do input sem remover o valor anterior
    document.getElementById('input2').value += "a";
}
function funcaoAlteraValor() {
    // muda o valor do input para uma string vazia removendo o valor anterior
    document.getElementById('input2').value = "";
}

// diferença de innerText para innerHTML
// innerText pode adicionar ou retornar um texto visível 
// innerHTML pode adicionar ou retornar um elemento HTML

// adicionando trexto
function funcaoAdicionaTexto() {
    // adiciona um texto
    document.getElementById('paragrafo1').innerText = "😃";
}
function funcaoAlteraTexto() {
    // sobrescreve o texto anterior
    document.getElementById('paragrafo1').innerText = "😔";
}
function funcaoAdicionaMaisTexto() {
    // também é possivel adicionar texto sem remover o anterior
    document.getElementById('paragrafo1').innerText += "😎";
}

// retornando texto
function funcaoRetornaTexto() {
    let valor = document.getElementById('lorem').innerText;
    console.log(valor);
}

// adicionando elemento HTML 
function funcaoAdicionaHTML() {
    document.getElementById('paragrafo2').innerHTML = "<a href='https://www.lipsum.com/'>sou um link</a>"
    console.log(valor);
}