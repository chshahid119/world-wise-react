import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import User from "../components/User";
import { useAuth } from "../contexts/FakeAuthContext";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      {<User />}
    </div>
  );
}

export default AppLayout;
