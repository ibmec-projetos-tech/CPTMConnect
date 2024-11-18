import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Mapa.css';

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
    const [comparisonLocation, setComparisonLocation] = useState(null);
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

    const handleCompareLocation = () => {
        // Lógica para comparação
        const [lat, lng] = destination.split(',').map(coord => parseFloat(coord.trim()));
        if (!isNaN(lat) && !isNaN(lng)) {
            setComparisonLocation({ lat, lng });
        } else {
            alert('Por favor, insira as coordenadas no formato correto (lat,lng).');
        }
    };

    return (
        <div>
            <h1>Mapa</h1>
            <input
                type="text"
                placeholder="Digite a localização (lat,lng)"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />
            <button onClick={handleCompareLocation}>Comparar</button>

            <LoadScript googleMapsApiKey="AIzaSyAh2QVjH1KNLVKPul7QQ7_hopR4fRO-Bww"> {/* Substitua pela sua chave API */}
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={userLocation}
                    zoom={10}
                >
                    {/* Marcador para a localização do usuário */}
                    <Marker position={userLocation} />
                    {/* Marcador para a localização de comparação, se existir */}
                    {comparisonLocation && (
                        <Marker position={comparisonLocation} />
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default Mapa;