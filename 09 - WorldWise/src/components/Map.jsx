import { useNavigate } from "react-router-dom";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import styles from "./Map.module.css";
import { useState } from "react";

function Map() {
  const navigate = useNavigate();
  const [mapPosition] = useState([42, 0]);
  // const [searchParams] = useSearchParams();
  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={13}
        scrollWhellZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>Popup</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
