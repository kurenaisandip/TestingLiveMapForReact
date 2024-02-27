import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIconURL from "../assets/marker-icon.png";
import "../assets/map.css";

const markerIcon = new L.Icon({
    iconUrl: markerIconURL,
    iconSize: [25, 35],
    iconAnchor: [5, 30],
});

interface Location {
    latitude: number;
    longitude: number;
    display_name: string;
}

interface Props {
    location: Location;
}

export default function Map({ location }: Props) {
    return (
        <div className="map-container">
            <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker icon={markerIcon} position={[location.latitude, location.longitude]}>
                    <Popup>{location.display_name}</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
