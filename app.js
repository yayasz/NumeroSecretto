let nS, tentativas = 0, nome = prompt("Qual é o seu nome?") || "Jogador";

const atualizar = (msg, tent) => {
    document.getElementById('mensagem').textContent = msg;
    document.getElementById('tentativas').textContent = `Tentativas: ${tent}`;
}

const iniciarJogo = () => {
    nS = Math.floor(Math.random() * 10) + 1;
    tentativas = 0;
    atualizar(`Bem-vindo, ${nome}! Tente adivinhar o número entre 1 e 10.`, tentativas);
    document.getElementById('reiniciarBtn').style.display = "none";
}

const verificarPalpite = () => {
    let p = +document.getElementById('palpite').value;
    if (isNaN(p)) return alert("Digite um número válido!");
    tentativas++;
    if (p === nS) {
        atualizar(`${nome}, você acertou! Número: ${nS}. Tentativas: ${tentativas}`, tentativas);
        document.getElementById('reiniciarBtn').style.display = "inline-block";
    } else {
        atualizar(`O número é ${p < nS ? "MAIOR" : "MENOR"}.`, tentativas);
    }
    document.getElementById('palpite').value = '';
}

const reiniciar = () => iniciarJogo();

iniciarJogo();