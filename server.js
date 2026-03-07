const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./src/routes/orderRoutes');

const app = express();

// Middleware: Permite que a API entenda ficheiros JSON enviados no corpo da requisição
app.use(express.json());

// Conexão com o Banco de Dados (substitua pela sua string do MongoDB)
mongoose.connect('mongodb://localhost:27017/desafio_api')
  .then(() => console.log("Conectado ao MongoDB com sucesso!"))
  .catch(err => console.error("Erro ao conectar no banco:", err));

// Define que todas as rotas de pedidos começarão com /order
app.use('/order', orderRoutes);

// Define a porta onde o servidor vai rodar
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});