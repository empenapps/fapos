import { createSlice } from "@reduxjs/toolkit";

export const saveSale = createSlice({
  name: "saveSale",
  initialState: {
    value: {},
  },
  reducers: {
    saveSaleData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveSaleData } = saveSale.actions;

export default saveSale.reducer;
