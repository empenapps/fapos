import { createSlice } from "@reduxjs/toolkit";

export const searchedProduct = createSlice({
  name: "searchedProduct",
  initialState: {
    value: [],
  },
  reducers: {
    setSearchedProduct: (state, action) => {
      state.value = action.payload;
    },
    emptySearchedProduct: (state, action) => {
      state.value = [];
    },
  },
});

export const { setSearchedProduct, emptySearchedProduct } =
  searchedProduct.actions;

export default searchedProduct.reducer;
