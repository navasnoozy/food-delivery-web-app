import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slice/userSlice";
import foodSlice from "./slice/foodSlice";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    user: usersSlice,
    food: foodSlice,
    cart: cartSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;