import { createSlice } from "@reduxjs/toolkit";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialStateAccount,
  reducers: {
    deposit(state, action) {
      state.balance = state.balance + action.payload;
    },
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },
    requestLoan: {
      prepare(amount, loanPurpose) {
        return {
          payload: {
            amount,
            loanPurpose,
          },
        };
      },

      reducer(state, action) {
        if (state.loan > 0) return; //not modify the state
        state.loanPurpose = action.payload?.loanPurpose;
        state.balance += action.payload?.amount;
        state.loan = action.payload?.amount;
      },
    },
    payLoan(state, action) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    loading(state, action) {
      state.isLoading = true;
    },
  },
});

export const { deposit, withdraw, loading, requestLoan, payLoan } =
  accountSlice.actions;

export default accountSlice.reducer;
// export default function reducerAccount(state = initialStateAccount, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         balance: state.balance + action.payload.amount,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     case "account/loading":
//       return {
//         ...state,
//         isLoading: true,
//       };

//     default:
//       return { ...state };
//   }
// }

// export function deposit(amount, currency) {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };

//   return async function (dispatch, getState) {
//     dispatch({ type: "account/loading" });
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );

//     const data = await res.json();
//     const convertedAmount = data.rates.USD;
//     console.log(convertedAmount);
//     dispatch({ type: "account/deposit", payload: convertedAmount });
//   };
// }

// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// export function requestLoan(moneyAmount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount: moneyAmount, purpose },
//   };
// }

// export function payLoan() {
//   return { type: "account/payLoan" };
// }
