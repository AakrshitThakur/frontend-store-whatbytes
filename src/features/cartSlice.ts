import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "@/utils/interfaces/cart";

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = state.find((c) => c.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    updateCartItemQuantity(state, action: PayloadAction<CartItem>) {
      const item = state.find((c) => c.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      } else {
        console.error("Invalid id: updateCartItemQuantity");
      }
    },
    removeCartItem(state, action: PayloadAction<string>) {
      return state.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addToCart, updateCartItemQuantity, removeCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
