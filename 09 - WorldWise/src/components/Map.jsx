import { useNavigate } from "react-router-dom";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import styles from "./Map.module.css";
import { useState } from "react";
import { useCitiesContext } from "../contexts/CitiesContext";

function Map() {
  const navigate = useNavigate();
  const [mapPosition] = useState([40.46635901755316, -3.7133789062500004]);
  // const [searchParams] = useSearchParams();
  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");

  const { city } = useCitiesContext();

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
        {city.map((cElement) => (
          <Marker
            key={cElement.id}
            position={[cElement.position.lat, cElement.position.lng]}
          >
            <Popup>
              {cElement.cityName}
              <img alt="flag" src={cElement.url} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
