import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCost, getTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQuantity = useSelector(getTotalQuantity);

  const totalCost = useSelector(getTotalCost);

  if (!totalQuantity) return null;

  return (
    <div className="align-center flex justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className=" space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalCost)}</span>
      </p>
      <Link to="/cart">Cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
