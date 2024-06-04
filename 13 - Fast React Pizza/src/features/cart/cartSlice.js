import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 5,
  //     name: "Diavola",
  //     unitPrice: 16,
  //     imageUrl:
  //       "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-5.jpg",
  //     ingredients: ["tomato", "mozzarella", "spicy salami", "chili flakes"],
  //     soldOut: false,
  //     quantity: 1,
  //     totalPrice: 16,
  //   },
  // ],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      if (action.payload.soldOut) return;
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;

      if (item.quantity === 0)
        cartReducer.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  deleteItem,
} = cartReducer.actions;

export default cartReducer.reducer;

export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((acc) => acc + 1, 0);

export const getTotalCost = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

export const getUserName = (state) => state.user.userName;

// export const getItemQuantity = (id) => (state) =>
//   state.cart.cart?.find((item) => item.pizzaId === id)?.quantity ?? 0;

export function getItemQuantity(id) {
  return function (state) {
    return state.cart.cart?.find((item) => item.pizzaId === id)?.quantity ?? 0;
  };
}
