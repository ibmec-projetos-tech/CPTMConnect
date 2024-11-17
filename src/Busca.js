// Busca.js
import './Busca.css';
import React, { useState, useEffect } from 'react';

function Busca() {
    const [mode, setMode] = useState('Sim');
    const [lines, setLines] = useState([]);
    const [stations, setStations] = useState([]);
    const [selectedLine, setSelectedLine] = useState('');
    const [startStation, setStartStation] = useState('');
    const [endStation, setEndStation] = useState('');
    const [availableLines, setAvailableLines] = useState([]);

    const handleModeChange = () => {
        setMode(mode === 'Sim' ? 'Não' : 'Sim');
    };

    // Carregar todas as linhas da API
    useEffect(() => {
        fetch('http://localhost:5001/api/lines')
            .then(response => response.json())
            .then(data => setLines(data))
            .catch(error => console.error('Error:', error));
    }, []);

    // Carregar estações com base na acessibilidade
    useEffect(() => {
        const acessibilidade = mode === 'Sim';

        fetch(`http://localhost:5001/api/stations?acessibilidade=${acessibilidade}`)
            .then(response => response.json())
            .then(data => setStations(data))
            .catch(error => console.error('Error:', error));
    }, [mode]);

    // Atualizar linhas disponíveis com base na estação de destino selecionada
    useEffect(() => {
        if (!endStation) {
            // Se nenhuma estação de destino estiver selecionada, limpa as linhas disponíveis
            return setAvailableLines([]);
        }

        // Filtra as linhas que contêm a estação de destino selecionada
        const filteredLines = lines.filter(line =>
            line.estacoes.some(station => station.nome === endStation && (mode === 'Não' || station.acessibilidade))
        );
        setAvailableLines(filteredLines);
    }, [endStation, lines, mode]);

    return (
        <div className="Busca">
            <div className="title">PARA ONDE VOCÊ VAI?</div>
            <div className="Search">
                <div className="Opcoes">
                    {/* Seleção de estação de partida */}
                    <select className="Opc" onChange={(e) => setSelectedLine(e.target.value)} value={selectedLine}>
                        <option value="">Selecione a estação de partida</option>
                        {stations.map((station, index) => (
                            <option key={index} value={station.nome}>
                                {station.nome}
                            </option>
                        ))}
                    </select>

                    {/* Seleção da estação de destino */}
                    <select className="Opc1" onChange={(e) => setStartStation(e.target.value)} value={startStation}>
                        <option value="">Selecione a estação de destino</option>
                        {stations.map((station, index) => (
                            <option key={index} value={station.nome}>
                                {station.nome}
                            </option>
                        ))}
                    </select>

                    {/* Botão para alternar acessibilidade */}
                    <div className="pai_texto_swift">
                        <p className="texto">Estações com acessibilidade</p>
                        <button className="SwiftButton" onClick={handleModeChange}>
                            {mode}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Busca;
