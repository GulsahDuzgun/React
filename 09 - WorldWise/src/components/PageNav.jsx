import { NavLink } from "react-router-dom";

export default function PageNav() {
  return (
    <nav>
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
