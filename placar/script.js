let esquerda = 0;
let direita = 0;
let botaoEsq = document.getElementById("left")
let botaoDir = document.getElementById("right")

function addPlacar(lado) {
    if (lado == "left") {
        esquerda++;
    }else {
        direita++;
    }
    document.getElementById("left").innerText = String(esquerda);
    document.getElementById("right").innerText = String(direita);
}

function resetPlacar() {
    esquerda = 0
    direita = 0
    document.getElementById("left").innerText = String(esquerda);
    document.getElementById("right").innerText = String(direita);   
}

function mudarCor(lado,cor) {
    if (lado == "left") {
        if (botaoDir.style.backgroundColor == cor) {
            return;
        }else {
            botaoEsq.style.backgroundColor = cor;
        }
    }else {
        if (botaoEsq.style.backgroundColor == cor) {
            return;
        }else {
            botaoDir.style.backgroundColor = cor;
        }
    }
}

