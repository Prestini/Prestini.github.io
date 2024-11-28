const linkPremio = "https://youtu.be/dQw4w9WgXcQ?si=d_Yrueu4W-GSrkW5";



const pontos = localStorage.getItem("pontos");
const tempo = localStorage.getItem("tempo");
const tentativas = localStorage.getItem("tentativas");

document.getElementById('score').textContent = pontos;
document.getElementById('tempo').textContent = tempo + "s";
document.getElementById('tentativas').textContent = tentativas;

function atualizarTitulo(titulo) {
    document.getElementById('titulo').textContent = titulo;
}

function atualizarBotaoPremio(mensagem) {
    document.getElementById('premio').textContent = mensagem;
}

function atualizarVideo(linkVideo) {
    document.getElementById("premio").href = linkVideo;
}

function decidirPremio() {
    if (pontos === 1000) {
        atualizarTitulo("Perfeito!");
        atualizarBotaoPremio("Receber Prêmio Lendario!");
    }
    else if (pontos >= 900) {
        atualizarTitulo("Épico!");
        atualizarBotaoPremio("Receber Prêmio Épico!");
    }
    else if (pontos > 800) {
        atualizarTitulo("Bom!");
        atualizarBotaoPremio("Receber Prêmio Diamante!");
    }
    else if (pontos > 700) {
        atualizarTitulo("Legal!");
        atualizarBotaoPremio("Receber Prêmio de Ouro!");
    }
    else if (pontos > 600) {
        atualizarTitulo("Nada Mal..!");
        atualizarBotaoPremio("Receber Prêmio de Prata!");
    }
    else if (pontos > 300) {
        atualizarTitulo("É...");
        atualizarBotaoPremio("Receber Prêmio de Bronze!");
    }
    else if (pontos > 200) {
        atualizarTitulo("Meu Deus..");
        atualizarBotaoPremio("Receber Prêmio de Cobre!");
    }
    else {
        atualizarTitulo("Como você sobreviveu até agora?");
        atualizarBotaoPremio("Receba Ajuda");
    }
}

decidirPremio();
