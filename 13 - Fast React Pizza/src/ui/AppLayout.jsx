import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

export default function AppLayout() {
  const { state: isLoading } = useNavigation();
  console.log(isLoading);

  return (
    <div className="layout grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading === "loading" && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-6xl  bg-red-500 ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
