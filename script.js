function mostrarResultado( vencedor ) {
    const texto = document.getElementById("textoResultado");

    if (vencedor === 1) {
        texto.textContent = "jogador 1 venceu!";
        emoji.textContent = "🐎";
    } else if (vencedor === 2) {
        texto.textContent = "🐅";
    } else {
        texto.textContent = "Empate!";
        emoji.textContent = "🤝";
    }
}
function iniciarCorrida() {
    mostrarResultado(1);
    mostrarResultado(2);
    mostrarResultado(0);
    
    const jogador1 = document.getElementById("jogador1");
    const jogador2 = document.getElementById("jogador2");
    const resultado = document.getElementById("resultado");

    // reset
    jogador1.style.transform = "translateX(0px)";
    jogador2.style.transform = "translateX(0px)";
    resultado.textContent = "";

    const larguraPista = document.querySelector(".pista").offsetWidth - 80;

    let pos1 = 0;
    let pos2 = 0;

    // velocidade mais lenta
    const vel1 = Math.random() * 5 + 5; // 0.5 a 1.5 px por frame
    const vel2 = Math.random() * 5 + 5;
    const intervalo = 1; // ms por frame

    const corrida = setInterval(() => {
        if (pos1 < larguraPista) pos1 += vel1;
        if (pos2 < larguraPista) pos2 += vel2;

        jogador1.style.transform = `translateX(${Math.min(pos1, larguraPista)}px)`;
        jogador2.style.transform = `translateX(${Math.min(pos2, larguraPista)}px)`;

        if (pos1 >= larguraPista && pos2 >= larguraPista) {
            clearInterval(corrida);
            if (pos1 > pos2) resultado.textContent = "🐎 Jogador 1 venceu!";
            else if (pos2 > pos1) resultado.textContent = "🐅 Jogador 2 venceu!";
            else resultado.textContent = "🤝 Empate!";
        }
    }, intervalo);
}

