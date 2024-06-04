import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  getItemQuantity,
  increaseItemQuantity,
} from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId }) {
  const itemCount = useSelector(getItemQuantity(pizzaId));
  const dispatch = useDispatch();
  return (
    <div className="flex items-center ">
      <Button
        type="round__left"
        handleClickEvent={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="min-w-7 max-w-7 bg-yellow-400 px-2 py-1 text-sm   font-semibold text-stone-800 md:px-1.5 md:py-1.5">
        {itemCount}
      </span>
      <Button
        type="round__right"
        handleClickEvent={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
