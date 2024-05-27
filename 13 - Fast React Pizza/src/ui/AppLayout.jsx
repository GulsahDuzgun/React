import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

export default function AppLayout() {
  const { state: isLoading } = useNavigation();

  {
    isLoading === "loading" && <Loader />;
  }
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}
