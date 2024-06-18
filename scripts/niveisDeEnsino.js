/* Esta função adiciona um evento de clique a um botão que, ao ser clicado,
faz uma requisição HTTP assíncrona para carregar o conteúdo de um arquivo HTML
e exibe este conteúdo em um elemento específico da página, ocultando a barra de rolagem da tela inicial.*/

document.querySelector(".botao-niveis-de-ensino").addEventListener("click", function() {
    var requisicaoHttp = new XMLHttpRequest();

    requisicaoHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { //Verifica se a requisição está completa
            var conteudo = document.querySelector(".niveis-de-ensino");
            conteudo.innerHTML = this.responseText; // Define o conteúdo HTML do elemento selecionado para o texto de resposta da requisição.
            conteudo.style.display = "block"; // Mostrar o conteúdo
            document.getElementById('body-tela-inicial').style.overflow = "hidden";
        }
    };

    requisicaoHttp.open("GET", "niveisDeEnsino.html", true);
    requisicaoHttp.send();
});

function esconderNiveisDeEnsino() {
    document.querySelector(".niveis-de-ensino").style.display = "none";
    document.getElementById('body-tela-inicial').style.overflow = "visible";
}

function borrarFundo() {
    document.querySelector(".#ALTERAR#").style.
}