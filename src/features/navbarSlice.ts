import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface navbarState {
  searchStr: string;
}

const initialState: navbarState = {
  searchStr: "",
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    updateSearchStr(state, action: PayloadAction<string>) {
      state.searchStr = action.payload;
    },
  },
});

export const { updateSearchStr } = navbarSlice.actions;
export default navbarSlice.reducer;
