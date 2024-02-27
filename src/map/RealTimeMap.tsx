import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Sample WebSocket URL for real-time updates
const WEBSOCKET_URL = 'ws://example.com/realtime';

const RealTimeMap: React.FC = () => {
    const [markers, setMarkers] = useState<any[]>([]);

    useEffect(() => {
        const socket = new WebSocket(WEBSOCKET_URL);

        socket.onopen = () => {
            console.log('WebSocket connection established.');
        };

        socket.onmessage = (event) => {
            // Handle real-time data updates
            const data = JSON.parse(event.data);
            // Example: { latitude: 51.505, longitude: -0.09, name: 'Marker 1' }
            setMarkers((prevMarkers) => [...prevMarkers, data]);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed.');
        };

        // Clean up WebSocket connection
        return () => {
            socket.close();
        };
    }, []);

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {markers.map((marker, index) => (
                <Marker key={index} position={[marker.latitude, marker.longitude]}>
                    <Popup>{marker.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default RealTimeMap;
