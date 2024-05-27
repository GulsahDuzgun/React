import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import Menu, { loader as fetchMenu } from "./features/menu/Menu";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: fetchMenu,
        errorElement: <Error />,
      },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "/order/:orderId", element: <Order /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
