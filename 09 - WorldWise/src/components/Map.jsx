import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h2>
        Position: {lat}, {lng}
      </h2>
      <button onClick={() => setSearchParams({ lat: 12, lng: 27 })}>
        Change
      </button>
    </div>
  );
}

export default Map;
