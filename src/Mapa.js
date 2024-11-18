import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Mapa.css';

const stationAddresses = [
    { id: 1, nome: "Jabaquara", coordinates: { lat: -23.6399, lng: -46.6413 } },
    { id: 2, nome: "Tucuruvi", coordinates: { lat: -23.4776, lng: -46.6241 } },
    { id: 3, nome: "Vila Prudente", coordinates: { lat: -23.5853, lng: -46.5828 } },
    { id: 4, nome: "Vila Madalena", coordinates: { lat: -23.5465, lng: -46.6920 } },
    { id: 5, nome: "Corinthians-Itaquera", coordinates: { lat: -23.5450, lng: -46.4732 } },
    { id: 6, nome: "Palmeiras-Barra Funda", coordinates: { lat: -23.5254, lng: -46.6687 } },
    { id: 7, nome: "Luz", coordinates: { lat: -23.5362, lng: -46.6336 } },
    { id: 8, nome: "São Paulo-Morumbi", coordinates: { lat: -23.5931, lng: -46.7167 } },
    { id: 9, nome: "Capão Redondo", coordinates: { lat: -23.6515, lng: -46.7696 } },
    { id: 10, nome: "Chácara Klabin", coordinates: { lat: -23.5767, lng: -46.6238 } },
    { id: 11, nome: "Francisco Morato", coordinates: { lat: -23.2793, lng: -46.7461 } },
    { id: 12, nome: "Júlio Prestes", coordinates: { lat: -23.5337, lng: -46.6417 } },
    { id: 13, nome: "Amador Bueno", coordinates: { lat: -23.5374, lng: -47.0716 } },
    { id: 14, nome: "Osasco", coordinates: { lat: -23.5320, lng: -46.7928 } },
    { id: 15, nome: "Grajaú", coordinates: { lat: -23.7551, lng: -46.7016 } },
    { id: 16, nome: "Brás", coordinates: { lat: -23.5429, lng: -46.6164 } },
    { id: 17, nome: "Rio Grande da Serra", coordinates: { lat: -23.7435, lng: -46.3974 } },
    { id: 18, nome: "Jardim Colonial", coordinates: { lat: -23.6085, lng: -46.5237 } },
];

const containerStyle = {
    width: '100%',
    height: '400px',
};

const defaultCenter = {
    lat: -3.745, // Coordenadas padrão
    lng: -38.523,
};

function Mapa() {
    const [userLocation, setUserLocation] = useState(defaultCenter);
    const [destinationLocation, setDestinationLocation] = useState(null);
    const [destination, setDestination] = useState('');

    useEffect(() => {
        // Obtendo a localização do usuário
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });
                },
                () => {
                    alert('Erro ao obter a localização do usuário.');
                }
            );
        } else {
            alert('Geolocalização não é suportada neste navegador.');
        }
    }, []);

    const handleSearchLocation = async () => {
        // Verifica se o campo de destino está preenchido
        if (!destination) {
            alert('Por favor, insira um endereço ou local.');
            return;
        }

        // Fazendo a requisição para a API de Geocoding do Google para buscar o endereço digitado
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(destination)}&key=AIzaSyAh2QVjH1KNLVKPul7QQ7_hopR4fRO-Bww`
        );

        const data = await response.json();

        if (data.status === 'OK') {
            const { lat, lng } = data.results[0].geometry.location;
            setDestinationLocation({ lat, lng });
        } else {
            alert('Local não encontrado. Por favor, tente outro endereço.');
        }
    };

    return (
        <div>
            <h1 className='Map'>Mapa</h1>
            <div className='PaiPesquisa'>
            <input className='Input'
                type="text"
                placeholder="Digite o endereço ... ( SP )"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />
            <button className = 'Butao' onClick={handleSearchLocation}>Pesquisar</button>
            </div>
            <LoadScript googleMapsApiKey="AIzaSyAh2QVjH1KNLVKPul7QQ7_hopR4fRO-Bww"> {/* Substitua pela sua chave API */}
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={userLocation}
                    zoom={10}
                >
                    {/* Marcador para a localização do usuário */}
                    <Marker position={userLocation} />

                    {/* Marcador para o local de destino, se existir */}
                    {destinationLocation && (
                        <Marker position={destinationLocation} />
                    )}
                    {stationAddresses.map((station) => (
                        <Marker
                            key={station.id}
                            position={station.coordinates}
                            label={station.nome}
                            title={station.nome}
                            icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                        />
                    ))}

                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default Mapa;
