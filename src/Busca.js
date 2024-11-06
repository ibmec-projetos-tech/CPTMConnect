// Busca.js
import './Busca.css';
import React, { useState } from 'react';

function Busca() {
    const [mode, setMode] = useState('Sim');
    const [lines, setLines] = useState([]);

    // Função para alternar o modo
    const handleModeChange = () => {
        setMode(mode === 'Sim' ? 'Não' : 'Sim');
    };

    // Função para carregar as linhas a partir da API
    const handleButtonClick = () => {
        fetch('http://localhost:5001/api/lines')  // Rota da API
            .then(response => response.json())
            .then(data => {
                setLines(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="Busca">
            <div className='title'>
                PARA ONDE VOCÊ VAI?
            </div>
            <div className="Search">
                <div className="Opcoes">
                    <select className="Opc">
                        {lines.map((line, index) => (
                            <option key={index} value={line.linha}>
                                {line.linha}
                            </option>
                        ))}
                    </select>
                    <select className="Opc1">
                        {lines.map((line, index) => (
                            <option key={index} value={line.linha}>
                                {line.linha}
                            </option>
                        ))}
                    </select>
                    <div className='pai_texto_swift'>
                        <p className='texto'>Estações com acessibilidade</p>
                        <button className="SwiftButton" onClick={handleModeChange}>
                            {mode}
                        </button>
                    </div>
                </div>
            </div>
            <button className="Botao" onClick={handleButtonClick}>
                PESQUISAR
            </button>
        </div>
    );
}

export default Busca;