import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  console.log(item);
  return (
    <li className="py-2">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)} </p>
      </div>
    </li>
  );
}

export default OrderItem;
