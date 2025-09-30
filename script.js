


function toggleCaixa(id) {
    // Encontra a caixa de texto específica usando o ID que foi passado
    const caixaDeTexto = document.getElementById(id);

    if (caixaDeTexto.style.display === "none") {
        caixaDeTexto.style.display = "block";
    } else {
        caixaDeTexto.style.display = "none";
    }

}


function cadastro(id) {
    // Encontra a caixa de texto específica usando o ID que foi passado
    const caixaDeTexto = document.getElementById(id);
    const descricao = document.getElementById("Teste")
    const valorDesc = descricao.value;

    num = 54996668329;
    window.open("https://wa.me/"+num+"?text="+valorDesc+"");
   
}
  // botão que leva para cadastro
const btnCadastro = document.getElementById("btnCadastro");
if (btnCadastro) {
  btnCadastro.addEventListener("click", () => {
    window.location.href = "cadastro.html";
  });
}

// botão que leva de volta para home
const btnVoltar = document.getElementById("btnVoltar");
if (btnVoltar) {
  btnVoltar.addEventListener("click", () => {
    window.location.href = "home.html";
  });
}



