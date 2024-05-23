import { combineReducers, createStore } from "redux";
import reducerAccount from "./features/accounts/accountSlice";
import reducerCustomer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  cutomerState: reducerCustomer,
  accountState: reducerAccount,
});

const store = createStore(rootReducer);

store.dispatch({ type: "customer/updateName", payload: "Deniz" });
console.log(store.getState());
