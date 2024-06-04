import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getItemQuantity } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const itemQuantity = useSelector(getItemQuantity(id));
  const isItemIn = itemQuantity > 0;

  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      soldOut,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-1.5 ">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-90 grayscale" : ""} `}
      />
      <div className=" flex grow flex-col  ">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          <div className="space-x-2">
            {isItemIn && <DeleteItem pizzaId={id} />}
            {!soldOut && !isItemIn && (
              <Button handleClickEvent={() => handleAddToCart()} type="small">
                Add to cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
