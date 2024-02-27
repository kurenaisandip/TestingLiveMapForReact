import React, { useEffect } from 'react';
import L, {Layer} from 'leaflet';
import 'leaflet/dist/leaflet.css';

const OpenStreetMap: React.FC = () => {
    useEffect(() => {
        const map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        let marker: L.Marker | undefined;
        let circle: L.Circle | undefined;
        let zoomed: L.Map | undefined;

        const success = (pos: GeolocationPosition) => {
            const { latitude: lat, longitude: lng } = pos.coords;
            const accuracy = pos.coords.accuracy;

            if (marker) {
                map.removeLayer(marker);
                if (circle instanceof Layer) {
                    map.removeLayer(circle);
                }
            }

            marker = L.marker([lat, lng]).addTo(map);
            circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);

            if (!zoomed) {
                zoomed = map.fitBounds(circle.getBounds());
            }

            map.setView([lat, lng]);
        };

        const error = (err: GeolocationPositionError) => {
            if (err.code === 1) {
                alert('Please allow geolocation access');
            } else {
                alert('Cannot get current location');
            }
        };

        const watchId = navigator.geolocation.watchPosition(success, error);

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);

    return (
        <main>
            <div id="map" style={{ height: '350px' }}></div>
        </main>
    );
};

export default OpenStreetMap;
