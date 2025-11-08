import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FoodItemType } from "../../types/food";

interface CartItem extends FoodItemType {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
  totalItems: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<FoodItemType>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalAmount = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalAmount = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalAmount = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      }
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalAmount = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalItems = 0;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;