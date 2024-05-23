import { combineReducers, createStore } from "redux";
import reducerAccount from "./features/accounts/accountSlice";
import reducerCustomer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  customerState: reducerCustomer,
  accountState: reducerAccount,
});

const store = createStore(rootReducer);
export default store;
