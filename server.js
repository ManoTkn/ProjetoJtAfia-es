import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o banco
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'jtafiacoes'
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});


async function carregarProdutos() {
  const resposta = await fetch('http://localhost:3000/produtos');
  const produtos = await resposta.json();
  console.log(produtos);
  // aqui você pode gerar dinamicamente os itens no HTML
}


// Rota para salvar nome, telefone e descrição
app.post('/cadastro', (req, res) => {
  const { nome, telefone, descricao } = req.body;

  if (!nome || !telefone || !descricao) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
  }

  const sql = 'INSERT INTO clientes (nome, telefone, descricao) VALUES (?, ?, ?)';
  db.query(sql, [nome, telefone, descricao], (erro) => {
    if (erro) {
      console.error('Erro ao salvar no banco:', erro);
      return res.status(500).json({ mensagem: 'Erro ao salvar no banco!' });
    }
    res.json({ mensagem: 'Solicitação registrada com sucesso!' });
  });
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
