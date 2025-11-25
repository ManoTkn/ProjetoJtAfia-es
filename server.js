import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

//Conexão com o banco Local
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cadastro'
});  

// Conexão com o banco Online
// const db = mysql.createConnection({
//   host: 'sql3.freesqldatabase.com',
//   port: 3306,
//   user: 'sql3806097',
//   password: 'NGanHevbAM',
//   database: 'sql3806097'
// });

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});


// Rota para salvar nome, telefone e descrição
app.post('/cadastro', (req, res) => {
  const { nome, telefone, descricao } = req.body;

  if (!nome || !telefone || !descricao) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
  }

  const sql = 'INSERT INTO servicos (nome, telefone, descricao) VALUES (?, ?, ?)';
  db.query(sql, [nome, telefone, descricao], (erro) => {
    if (erro) {
      console.error('Erro ao salvar no banco:', erro);
      return res.status(500).json({ mensagem: 'Erro ao salvar no banco!' });
    }
    res.json({ mensagem: 'Solicitação registrada com sucesso!' });
  });
});




app.get("/Adm", (req, res) => {
  const sql = "SELECT * FROM servicos";
  
  db.query(sql, (erro, resultados) => {
    if (erro) {
      return res.status(500).json({ erro: "Erro no banco" });
    }
    
    res.json(resultados);
  });
});

// Rota corrigida para limpar a tabela
app.delete("/limpar", (req, res) => {
  console.log("Rota /limpar acessada. Tentando truncar a tabela...");
  
  const sql = "TRUNCATE TABLE servicos";

  db.query(sql, (erro) => {
    if (erro) {
      console.error("Erro ao limpar a tabela:", erro);
      return res.status(500).json({ mensagem: "Erro ao limpar a tabela!" });
    }

    res.json({ mensagem: "Tabela de serviços limpa com sucesso!" });
  });
});

app.listen(3000, () => console.log('Servidor rodando em http://127.0.0.1:3000'));