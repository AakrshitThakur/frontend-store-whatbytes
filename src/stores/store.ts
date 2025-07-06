import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "@/features/sidebarSlice";
import navbarSlice from "@/features/navbarSlice";
import cartSlice from "@/features/cartSlice";
import productSlice from "@/features/productSlice";

export const createStore = () =>
  configureStore({
    reducer: {
      sidebar: sidebarSlice,
      navbar: navbarSlice,
      cart: cartSlice,
      product: productSlice,
    },
  });

// Infer types for `RootState` and `AppDispatch`
export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
