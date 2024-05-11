import styles from "./AppLayout.module.css";
import Sideabar from "../components/Sidebar";
import Map from "../components/Map";
import { useAuthCountext } from "../contexts/AuthProvider";
import User from "../components/User";

export default function AppLayout() {
  const { isAuthenticated } = useAuthCountext();
  console.log(isAuthenticated);
  return (
    <div className={styles.app}>
      {isAuthenticated && <User />}
      <Sideabar />
      <Map />
    </div>
  );
}
