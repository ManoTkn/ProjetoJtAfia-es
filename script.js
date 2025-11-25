

function toggleCaixa(id) {
  const alvo = document.getElementById(id);
  const caixas = document.querySelectorAll('.itemDescription');

   if(!alvo) return;

   const estaAberta = alvo.style.display=== 'block';

     caixas.forEach(caixa => {
       caixa.style.display = 'none';
    });
     
    if(!estaAberta) {
      alvo.style.display = 'block';
    }
  }
 
  // botão que leva para cadastro
function IrPagCadastro()
{
  window.location.href = "cadastro.html";
}

function goToCadastro()
{
  window.location.href = "Adm.html";
}

// botão que leva de volta para home
const btnVoltar = document.getElementById("btnVoltar");
if (btnVoltar) {
  btnVoltar.addEventListener("click", () => {
    window.location.href = "home.html";
  });
}

async function carregarProdutos() {
  const resposta = await fetch('http://localhost:3000/produtos');
  const produtos = await resposta.json();
  console.log(produtos);
  // aqui você pode gerar dinamicamente os itens no HTML
}

// Enviar dados do cadastro para o servidor
const formCadastro = document.getElementById('formCadastro');

if (formCadastro) {
  formCadastro.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const descricao = document.getElementById('descricao').value.trim();

    if (!nome || !telefone || !descricao) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    try {
      const resposta = await fetch('http://localhost:3000/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, telefone, descricao })
      });

      const data = await resposta.json();
      alert(data.mensagem);
     SendToWhatsApp(descricao);
     
      formCadastro.reset();
    } catch (erro) {
      alert('Erro ao conectar com o servidor.');
      console.error(erro);
    }
  });
}

function SendToWhatsApp(valorDesc) {
    num = 54996668329;
    window.open("https://wa.me/"+num+"?text="+valorDesc+"");
   
}


// botão limpar tabela
const btnLimpar = document.getElementById("btnLimpar");

if (btnLimpar) {
  btnLimpar.addEventListener("click", async () => {

    if (!confirm("Deseja realmente limpar toda a tabela?")) return;

    try {
      const resposta = await fetch("http://localhost:3000/limpar", {
        method: "DELETE"
      });
      
      const data = await resposta.json();
      alert(data.mensagem); // Mensagem "Tabela de serviços limpa com sucesso!"
      
      location.reload();
    } catch (erro) {
      console.error("Erro:", erro);
      alert("Erro ao tentar limpar a tabela!");
    }
  });
}