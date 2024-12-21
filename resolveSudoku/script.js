let selecionado;

let col1 = document.getElementsByClassName("col1");
let col2 = document.getElementsByClassName("col2");
let col3 = document.getElementsByClassName("col3");
let col4 = document.getElementsByClassName("col4");
let col5 = document.getElementsByClassName("col5");
let col6 = document.getElementsByClassName("col6");
let col7 = document.getElementsByClassName("col7");
let col8 = document.getElementsByClassName("col8");
let col9 = document.getElementsByClassName("col9");

const colunas = [col1,col2,col3,col4,col5,col6,col7,col8,col9];

let lin1 = document.getElementsByClassName("lin1");
let lin2 = document.getElementsByClassName("lin2");
let lin3 = document.getElementsByClassName("lin3");
let lin4 = document.getElementsByClassName("lin4");
let lin5 = document.getElementsByClassName("lin5");
let lin6 = document.getElementsByClassName("lin6");
let lin7 = document.getElementsByClassName("lin7");
let lin8 = document.getElementsByClassName("lin8");
let lin9 = document.getElementsByClassName("lin9");

const linhas = [lin1,lin2,lin3,lin4,lin5,lin6,lin7,lin8,lin9];

let bloco1 = document.getElementsByClassName("bloco1");
let bloco2 = document.getElementsByClassName("bloco2");
let bloco3 = document.getElementsByClassName("bloco3");
let bloco4 = document.getElementsByClassName("bloco4");
let bloco5 = document.getElementsByClassName("bloco5");
let bloco6 = document.getElementsByClassName("bloco6");
let bloco7 = document.getElementsByClassName("bloco7");
let bloco8 = document.getElementsByClassName("bloco8");
let bloco9 = document.getElementsByClassName("bloco9");

const blocos = [bloco1,bloco2,bloco3,bloco4,bloco5,bloco6,bloco7,bloco8,bloco9];

function selecionar(num, botao) {
    let numeros = document.getElementsByClassName("botaoNum")
    for (let i = 0; i < numeros.length; i++) {
        numeros[i].style.backgroundColor = "rgb(20, 20, 20)";
        numeros[i].style.color = "white";
    }
    
    botao.style.backgroundColor = "rgb(60, 60, 60)";
    botao.style.color = "white";
    selecionado = num;
    
}

function escurecer(botao) {
    let idSelecionado = "num"+selecionado;
    let botaoSelecionado = document.getElementById(idSelecionado);
    if (botaoSelecionado == botao) {
        botao.style.backgroundColor = "rgb(60, 60, 60)";
    }else {
        botao.style.backgroundColor = "rgb(20, 20, 20)";
        botao.style.color = "white";
    }   
}

function clarear(botao) {
    botao.style.backgroundColor = "rgb(50, 50, 50)";
    botao.style.color = "white";
}

function adicionar(botao) {
    if (selecionado == undefined) {
        return;
    }else {
        botao.innerText = selecionado;
    }
}

function procuraCordenada(classe) {
    let cordenada = "p" + classe[9] + classe[14] + classe[21];
    return cordenada;
}

function resolver() {

    const espacos = {};
    const espacosOcupado = {};
    let chave = Object.keys(espacos);
    let valor = Object.values(espacos);
    let chaveOcupado = Object.keys(espacosOcupado);
    let valorOcupado = Object.values(espacosOcupado);

    while (valorOcupado.length != 81) {
        for (let a = 0; a < colunas.length; a++) {
        
            for (let b = 0; b < colunas[a].length; b++) {
                
                let pos = procuraCordenada(colunas[a][b].className);
                
                if (colunas[a][b].textContent != "") {
                    espacos[pos] = colunas[a][b].textContent;
                    chave = Object.keys(espacos);
                    valor = Object.values(espacos);
                    espacosOcupado[pos] = colunas[a][b].textContent;
                    chaveOcupado = Object.keys(espacosOcupado);
                    valorOcupado = Object.values(espacosOcupado);
                }else {
                    espacos[pos] = ["1","2","3","4","5","6","7","8","9"]; 
                    chave = Object.keys(espacos);
                    valor = Object.values(espacos);
                }
            }
        }
    
        function temNaColuna(colunaPos) {
            const colunaOcupado = [];
            for (let a = 0; a < chaveOcupado.length; a++) {
                if (chaveOcupado[a][1] == colunaPos) {
                    colunaOcupado.push(valorOcupado[a]);
                }
            }
            return colunaOcupado;
        }
    
        function temNaLinha(linhaPos) {
            const linhaOcupado = [];
            for (let a = 0; a < chaveOcupado.length; a++) {
                if (chaveOcupado[a][2] == linhaPos) {
                    linhaOcupado.push(valorOcupado[a]);
                }
            }
            return linhaOcupado;
        }
    
        function temNoBloco(blocoPos) {
            const blocoOcupado = [];
            for (let a = 0; a < chaveOcupado.length; a++) {
                if (chaveOcupado[a][3] == blocoPos) {
                    blocoOcupado.push(valorOcupado[a]);
                }
            }
            return blocoOcupado;
        }
    
        for (let a = 0; a < chave.length; a++) {
            
            if(Array.isArray(valor[a])) {
                
                let naoCandidatosCol = temNaColuna(chave[a][1]);
                let naoCandidatosLin = temNaLinha(chave[a][2]);
                let naoCandidatosBlo = temNoBloco(chave[a][3]);
    
                for (let b = 0; b < naoCandidatosCol.length; b++) {
                    let index = valor[a].indexOf(naoCandidatosCol[b])
                    if(index != -1) {
                        valor[a].splice(index, 1);
                    }
                }
                for (let b = 0; b < naoCandidatosLin.length; b++) {
                    let index = valor[a].indexOf(naoCandidatosLin[b])
                    if (index != -1) {
                        valor[a].splice(index, 1);
                    }
                }
                for (let b = 0; b < naoCandidatosBlo.length; b++) {
                    let index = valor[a].indexOf(naoCandidatosBlo[b])
                    if (index != -1) {
                        valor[a].splice(index, 1);
                    }
                    
                }
    
                for (let b = 0; b < valor.length; b++) {
                    if (valor[a].length == 1) {
                        let col_ = "col"+chave[a][1];
                        let lin_ = "lin"+chave[a][2];
                        let classe = col_ + " " + lin_;
                        let espaco = document.getElementsByClassName(classe);
                        espaco[0].innerHTML = valor[a];
                        espaco[0].style.color = "aqua";
                    } 
                }
            }    
        } 
    }
}