import { NavLink } from "react-router-dom";
import style from "./PageNav.module.css";

export default function PageNav() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/*">Not Found</NavLink>
        </li>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}
