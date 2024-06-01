document.querySelector(".botao-niveis-de-ensino").addEventListener("click", function() {
    var requisicaoHttp = new XMLHttpRequest();

    requisicaoHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var conteudo = document.querySelector(".niveis-de-ensino");
            conteudo.innerHTML = this.responseText;
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