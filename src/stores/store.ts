import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "@/features/sidebarSlice";

export const createStore = () =>
  configureStore({
    reducer: {
      sidebar: sidebarSlice,
    },
  });

// Infer types for `RootState` and `AppDispatch`
export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
