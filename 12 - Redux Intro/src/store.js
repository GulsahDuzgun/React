import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import reducerAccount from "./features/accounts/accountSlice";
import reducerCustomer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";

const reducerObj = {
  accountState: reducerAccount,
  customerState: reducerCustomer,
};

const store = configureStore(
  {
    reducer: reducerObj,
  },
  applyMiddleware(thunk)
);

export default store;
