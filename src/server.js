// server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.static('public'));

// Função para obter todas as estações
app.get('/api/stations', (req, res) => {
    const accessibility = req.query.acessibilidade === 'true';

    fs.readFile('./public/estacoes.json', (err, data) => {
        if (err) {
            res.status(500).send("Erro ao carregar estações");
            return;
        }

        let stations = JSON.parse(data);
        
        // Filtrar por acessibilidade, se especificado
        if (req.query.acessibilidade) {
            stations = stations.filter(station => station.acessibilidade === accessibility);
        }

        res.json(stations);
    });
});

// Função para obter todas as linhas ou filtrar linhas que passam por uma estação específica e acessibilidade
app.get('/api/lines', (req, res) => {
    const accessibility = req.query.acessibilidade === 'true';
    const destination = req.query.estacaoDestino;

    fs.readFile('./public/linhas.json', (err, data) => {
        if (err) {
            res.status(500).send("Erro ao carregar linhas");
            return;
        }

        let lines = JSON.parse(data);
        
        // Filtrar linhas por acessibilidade, se especificado
        if (req.query.acessibilidade) {
            lines = lines.filter(line => 
                line.estacoes.some(estacao => estacao.acessibilidade === accessibility)
            );
        }

        // Filtrar linhas por estação de destino, se especificado
        if (destination) {
            lines = lines.filter(line => 
                line.estacoes.includes(destination)
            );
        }

        res.json(lines);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
