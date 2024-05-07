import styles from "./AppLayout.module.css";
import Sideabar from "../components/Sidebar";
import Map from "../components/Map";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sideabar />
      <Map />
    </div>
  );
}
