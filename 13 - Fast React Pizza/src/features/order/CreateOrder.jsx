import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { clearCart, getCart, getTotalCost } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import store from "../../store";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  // const cart = fakeCart;

  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";

  const submittedData = useActionData();
  const orderedPizzas = useSelector(getCart);
  const userName = useSelector((state) => state.user.userName);
  const [isPriority, setPriority] = useState();

  const totalCartPrice = useSelector(getTotalCost);
  const priorityPrice = isPriority ? totalCartPrice * 0.2 : 0;
  const totalCost = totalCartPrice + priorityPrice;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 mt-4 text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-1  sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <div className="grow">
            <input
              className="input w-full "
              type="text"
              name="customer"
              required
              defaultValue={userName}
            />
          </div>
        </div>

        <div className="mb-5 flex grow flex-col gap-2  sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" className="input w-full" required />
            {submittedData?.phone && (
              <p
                className="mt-2 rounded-lg bg-red-100 px-2 
              py-0.5 text-xs font-semibold text-red-700  sm:px-2 sm:py-1"
              >
                {submittedData.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex  flex-col gap-2  sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              className="input w-full"
              name="address"
              required
            />
          </div>
        </div>
        <input
          type="hidden"
          name="cart"
          value={JSON.stringify(orderedPizzas)}
        />

        <div className="mb-12 mt-6 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={isPriority}
            onChange={(e) => setPriority(e.target.checked)}
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
          />
          <label htmlFor="priority" className="font-medium">
            Want to you give your order priority?
          </label>
        </div>

        <div>
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting
              ? "Placing order..."
              : `Order now from ${formatCurrency(totalCost)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const orderData = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errObj = {};
  if (!isValidPhone(orderData.phone)) errObj.phone = "Phone number is wrong";

  if (Object.keys(errObj).length > 0) return errObj;

  const newOrder = await createOrder(orderData);
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
