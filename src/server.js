// server.js
const express = require('express');
const cors = require('cors'); // Importa o pacote cors
const app = express();
const PORT = 5001;

// Middleware para habilitar CORS
app.use(cors()); // Configuração CORS para liberar todas as origens

// Middleware para servir arquivos estáticos, incluindo o JSON
app.use(express.static('public'));

// Rota para pegar as linhas do JSON
app.get('/api/lines', (req, res) => {
    res.sendFile(__dirname + '/public/estacoes.json');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});