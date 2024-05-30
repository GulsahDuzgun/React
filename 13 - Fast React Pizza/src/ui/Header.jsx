import { Link } from "react-router-dom";
import SearchOrder from "../features/order/searchOrder";

export default function Header() {
  return (
    <header className="bg-yellow-500">
      <h2>Hello Gülşah? Keep going!!</h2>
      <p>Header</p>
      <Link to="/">Home</Link>
      <SearchOrder />
    </header>
  );
}
