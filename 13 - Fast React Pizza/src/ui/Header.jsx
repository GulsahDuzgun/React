import { Link } from "react-router-dom";
import SearchOrder from "../features/order/searchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="flex justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 align-middle uppercase sm:px-6">
      <h2>Hello Gülşah? Keep going!!</h2>

      <Link className="tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
