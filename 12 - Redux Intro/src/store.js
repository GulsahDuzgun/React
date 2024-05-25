import { configureStore } from "@reduxjs/toolkit";
import reducerAccount from "./features/accounts/accountSlice";
import reducerCustomer from "./features/customers/customerSlice";

const reducerObj = {
  accountState: reducerAccount,
  customerState: reducerCustomer,
};

const store = configureStore({
  reducer: reducerObj,
});

export default store;
