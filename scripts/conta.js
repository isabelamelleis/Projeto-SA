function abrirAbaEdicaoPerfil() {
    document.getElementById("fundo-editar-perfil-fechar").style.backgroundColor = "#000000b7";
    document.getElementById("fundo-editar-perfil-fechar").style.height = "100vh";
}

function fecharAbaEdicaoPerfil() {
    document.getElementById("fundo-editar-perfil-fechar").style.backgroundColor = "transparent";
    document.getElementById("fundo-editar-perfil-fechar").style.height = "0";
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

function alterarFotoDePerfil(foto) {
    const img = document.getElementById("img-foto-de-perfil-conta");
    img.src = foto;
    document.getElementById("img-foto-de-perfil-conta").style.height = "10.2vh";
    document.getElementById("img-foto-de-perfil-conta").style.borderRadius = "100px";
}