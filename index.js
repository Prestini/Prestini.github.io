if(localStorage.cadastrado !== "true") {
    window.location.replace("cadastro.html");
}

const recorde = +(localStorage.recorde ?? 0)


if (localStorage.recorde >= 0) {
    document.getElementById("recorde").textContent += " " + localStorage.recorde;
}
else {
    document.getElementById("recorde").hidden = true;
}
let mensagem = "Bem Vind";

if (localStorage.genero === "feminino") {
    mensagem += "a";
}
else {
    mensagem += "o"
}


document.getElementById("nome").textContent = mensagem + " " + localStorage.nome;