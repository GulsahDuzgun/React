import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 5,
      name: "Diavola",
      unitPrice: 16,
      imageUrl:
        "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-5.jpg",
      ingredients: ["tomato", "mozzarella", "spicy salami", "chili flakes"],
      soldOut: false,
      quantity: 1,
      totalPrice: 16,
    },
  ],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId !== action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
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
