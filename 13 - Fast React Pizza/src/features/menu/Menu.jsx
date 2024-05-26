import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "../menu/MenuItem";

function Menu() {
  const menu = useLoaderData();

  return menu.map((pizza) => <MenuItem pizza={pizza} key={pizza.id} />);
}

export async function loader() {
  const menuData = await getMenu();
  return menuData;
}

export default Menu;
