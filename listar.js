async function carregarClientes() {
  try {
    const resposta = await fetch("http://127.0.0.1:3000/Adm");
    const clientes = await resposta.json();

    const tbody = document.querySelector("table tbody");
    tbody.innerHTML = ""; // limpa a tabela

    clientes.forEach(cli => {
      const linha = document.createElement("tr");

      linha.innerHTML = `
        <td>${cli.Nome}</td>
        <td>${cli.Telefone}</td>
        <td>${cli.Descricao}</td>
      `;

      tbody.appendChild(linha);
    });

  } catch (erro) {
    console.error("Erro ao carregar clientes:", erro);
  }
}

// chama ao abrir a página
document.addEventListener("DOMContentLoaded", carregarClientes);