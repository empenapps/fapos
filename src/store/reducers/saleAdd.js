import { createSlice } from "@reduxjs/toolkit";

const AddSaleData = createSlice({
  name: "addSale",
  initialState: {
    value: [],
  },
  reducers: {
    SalesAdd: (state, action) => {
      state.value = action.payload;
    },
    emptySalesAdd: (state, action) => {
      state.value = [];
    },
  },
});

export const { SalesAdd, emptySalesAdd } = AddSaleData.actions;

export default AddSaleData.reducer;
