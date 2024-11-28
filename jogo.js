let numeroSecreto;
let tentativas = 0;
let tempoInicio;
let tempoAtual;
let intervaloTempo;

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log(numeroSecreto);
    tentativas = 0;
    document.getElementById("feedback").textContent = '';
    document.getElementById("attempts").textContent = `Tentativas: ${tentativas}`;
    document.getElementById("timer").textContent = 'Tempo: 0s';

    tempoInicio = Date.now();
    intervaloTempo = setInterval(atualizarTempo, 1000);
}

function atualizarTempo() {
    tempoAtual = Math.floor((Date.now() - tempoInicio) / 1000);
    document.getElementById("timer").textContent = `Tempo: ${tempoAtual}s`;
}

function verificarPalpite() {
    const palpite = parseInt(document.getElementById("guess").value);

    if (!palpite || palpite < 1 || palpite > 100) {
        document.getElementById("feedback").textContent = "Insira um número entre 1 e 100!";
        return;
    }

    tentativas++;
    document.getElementById("attempts").textContent = `Tentativas: ${tentativas}`;

    if (palpite === numeroSecreto) {
        ganharJogo();
        return;
    }

    if (palpite < numeroSecreto) {
        document.getElementById("feedback").textContent = "O número é maior!";
    } else if (palpite > numeroSecreto) {
        document.getElementById("feedback").textContent = "O número é menor!";
    } 
    document.getElementById("guess").value = "";
    document.getElementById("guess").focus();
}
function redirecionarParaPremio() {
    window.location.replace("final.html");
}

function calcularPontos() {
    const maximoPontos = 1000;
    return Math.ceil(1000 * Math.pow(0.9,tentativas-1));
}

function verificarPalpiteCallback(e) {
    if (e.key === "Enter") {
        verificarPalpite();
    }
}

function ganharJogo() {
    clearInterval(intervaloTempo);
    document.getElementById("feedback").textContent = `Você acertou! Foram ${tentativas} tentativas.`;
    document.getElementById("submit-btn").removeEventListener("click", verificarPalpite);
    document.getElementById("guess").removeEventListener("keyup", verificarPalpiteCallback);
    document.getElementById("submit-btn").addEventListener("click", redirecionarParaPremio);
    document.getElementById("submit-btn").textContent = "Receba seu Prêmio!";
    document.getElementById("guess").disabled = true;
    const pontos = calcularPontos();
    localStorage.setItem("pontos",pontos);
    localStorage.setItem("tentativas",tentativas);
    localStorage.setItem("tempo",tempoAtual);
    if (pontos >= +(localStorage.recorde ?? 0)) {
        localStorage.recorde = pontos;
    }
}


document.getElementById("submit-btn").addEventListener("click", verificarPalpite);
document.getElementById("guess").addEventListener("keyup", verificarPalpiteCallback);

window.onload = iniciarJogo;
