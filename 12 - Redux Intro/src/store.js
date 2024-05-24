import { configureStore } from "@reduxjs/toolkit";
import reducerAccount from "./features/accounts/accountSlice";
import reducerCustomer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    customerState: reducerCustomer,
    accountState: reducerAccount,
  },
});

export default store;
