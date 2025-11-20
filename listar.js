async function carregarClientes() {
  try {
    const resposta = await fetch("http://localhost:5500/Adm");
    const clientes = await resposta.json();

    const tbody = document.querySelector("table tbody");
    tbody.innerHTML = ""; // limpa a tabela

    clientes.forEach(cli => {
      const linha = document.createElement("tr");

      linha.innerHTML = `
        <td>${cli.nome}</td>
        <td>${cli.telefone}</td>
        <td>${cli.descricao}</td>
      `;

      tbody.appendChild(linha);
    });

  } catch (erro) {
    console.error("Erro ao carregar clientes:", erro);
  }
}

// chama ao abrir a página
document.addEventListener("DOMContentLoaded", carregarClientes);