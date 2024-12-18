function escolhas(escolha) {
    let num = Math.floor(Math.random() * 3) + 1;
    let escolhaRobo = "";
    let escolhaRoboEmoji = "";
    let escolhaEmoji = "";
    let resultado = "";
    switch (num) {
        case 1:
            escolhaRobo = "pedra";
            break;
        case 2:
            escolhaRobo = "papel";
            break;  
        case 3:
            escolhaRobo = "tesoura";
            break;
    }

    switch (escolhaRobo) {
        case "pedra":
            escolhaRoboEmoji = "⛰";
            break;
        case "papel":
            escolhaRoboEmoji = "📄";
            break;
        case "tesoura":
            escolhaRoboEmoji = "✂️";
            break;
    }

    switch (escolha) {
        case "pedra":
            escolhaEmoji = "⛰";
            if (escolhaRobo == escolha) {
                resultado = "empate";
            }else if (escolhaRobo == "tesoura") {
                resultado = "voce venceu";
            }else {
                resultado = "voce perdeu";
            }
            break;
        case "papel":
            escolhaEmoji = "📄";
            if (escolhaRobo == escolha) {
                resultado = "empate";
            }else if (escolhaRobo == "pedra") {
                resultado = "voce venceu";
            }else {
                resultado = "voce perdeu";
            }
            break;
        case "tesoura":
            escolhaEmoji = "✂️";
            if (escolhaRobo == escolha) {
                resultado = "empate";
            }else if (escolhaRobo == "papel") {
                resultado = "voce venceu";
            }else {
                resultado = "voce perdeu";
            }
            break;    
    }

    document.getElementById("roboEscolha").innerText = escolhaRoboEmoji;
    document.getElementById("suaEscolha").innerText = escolhaEmoji;
    document.getElementById("resultado").innerText = resultado;
}