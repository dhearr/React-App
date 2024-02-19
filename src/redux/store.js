import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
console.log("initial state", store.getState());

store.subscribe(() => {
  console.log("Updated State", store.getState());
});

export default store;
