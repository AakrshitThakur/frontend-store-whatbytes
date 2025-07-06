import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
  categories: string[];
  selectedCats: string[];
  range: {
    min: number;
    max: number;
  };
  // onCategoryChange: (selected: string[]) => void;
  // onPriceChange: (range: [number, number]) => void;
}

const initialState: SidebarState = {
  categories: ["shoe", "shirt", "electronic"],
  selectedCats: ["shoe", "shirt", "electronic"],
  range: {
    min: 0,
    max: 100000,
  },
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    updateSelectedCats(state, action: PayloadAction<string[]>) {
      if (!action.payload) {
        return console.error("updateSelectedCats payload error");
      }
      state.selectedCats = action.payload;
    },
    updateRange(
      state,
      action: PayloadAction<{
        min: number;
        max: number;
      }>
    ) {
      state.range = action.payload;
    },
  },
});

export const { updateSelectedCats, updateRange } = sidebarSlice.actions;
export default sidebarSlice.reducer;
