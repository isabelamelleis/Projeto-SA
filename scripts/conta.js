function abrirAbaEdicaoPerfil() {
    document.getElementById("fundo-editar-perfil-fechar").style.display = "block";
    document.getElementById("edicao-de-perfil").style.height = "96vh";
}

function fecharAbaEdicaoPerfil() {
    document.getElementById("fundo-editar-perfil-fechar").style.display = "none";
    document.getElementById("edicao-de-perfil").style.height = "0";
}

function abrirAbaEdicaoFoto() {
    document.getElementById("fundo-editar-foto-de-perfil").style.backgroundColor = "#000000b7";
    document.getElementById("fundo-editar-foto-de-perfil").style.height = "100vh";
    document.getElementById("botao-branco").style.color = "#ffffff"
}

function fecharAbaEdicaoFoto() {
    document.getElementById("fundo-editar-foto-de-perfil").style.backgroundColor = "transparent";
    document.getElementById("fundo-editar-foto-de-perfil").style.height = "0";
}

// Função para selecionar o avatar
function alterarFotoDePerfil(foto) {
    const img = document.getElementById("img-foto-de-perfil-conta");
    img.src = foto;

    document.getElementById("img-foto-de-perfil-conta").style.height = "10.2vh";

    sessionStorage.setItem('alterarFotoDePerfil', foto);
}

// Função para carregar o avatar salvo no sessionStorage
function carregarFotoSelecionada() {
    const fotoSalva = sessionStorage.getItem('alterarFotoDePerfil');

    if (fotoSalva) {
        const img = document.getElementById('img-foto-de-perfil-conta');
        img.src = fotoSalva;

        document.getElementById("img-foto-de-perfil-conta").style.height = "10.2vh";
    }
}

  // Chama a função carregarFotoSelecionada ao carregar a página
  window.onload = carregarFotoSelecionada;