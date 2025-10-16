function C

const mysql = require('mysql'); 

const connection = mysql.createConnection({
  host: 'localhost', // Endereço do servidor MySQL
  user: 'root', // Usuário do banco de dados
  password: 'root', // Senha do banco de dados
  database: 'cadastro' // Nome do banco de dados
});

connection.connect((err) => {
  if (err) {
    alert('Erro ao conectar ao MySQL:', err);
    return;
  }
  alert('Conectado ao MySQL com sucesso!');
});