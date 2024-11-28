if(localStorage.cadastrado === "true") {
    window.location.replace("index.html");
}

const nomeCampo = document.getElementById('nome');
const dataCampo = document.getElementById('data-nascimento');
const generoCampo = document.getElementById('genero');


function redirecionarParaJogo(e) {
    e.preventDefault();
    localStorage.setItem("cadastrado", true); 
    localStorage.setItem("nome", nomeCampo.value); 
    localStorage.setItem("data", dataCampo.value); 
    localStorage.setItem("genero", generoCampo.value); 
    window.location.replace("index.html");
}

const formCadastro = document.getElementById("form-cadastro");
formCadastro.addEventListener("submit",redirecionarParaJogo);