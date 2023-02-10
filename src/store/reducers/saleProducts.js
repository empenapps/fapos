import { createSlice } from "@reduxjs/toolkit";

export const saleProducts = createSlice({
  name: "sale",
  initialState: {
    value: [],
  },
  reducers: {
    setSaleProducts: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    increaseQuantity: (state, action) => {
      const index = JSON.parse(JSON.stringify(state.value)).findIndex(
        (product) => product.productCode === action.payload.productCode
      );
      const getProduct = JSON.parse(JSON.stringify(state.value)).find(
        (product) => product.productCode === action.payload.productCode
      );
      getProduct.quantity = getProduct.quantity + 1;
      state.value.splice(index, 1, getProduct);
    },
    decreaseQuantity: (state, action) => {
      const index = JSON.parse(JSON.stringify(state.value)).findIndex(
        (product) => product.productCode === action.payload.productCode
      );
      const getProduct = JSON.parse(JSON.stringify(state.value)).find(
        (product) => product.productCode === action.payload.productCode
      );
      if (getProduct.quantity > 1) {
        getProduct.quantity = getProduct.quantity - 1;
        state.value.splice(index, 1, getProduct);
      } else {
        state.value.splice(index, 1);
      }
    },
    emptySale: (state, action) => {
      state.value = [];
    },
  },
});

export const {
  setSaleProducts,
  increaseQuantity,
  emptySale,
  decreaseQuantity,
} = saleProducts.actions;

export default saleProducts.reducer;
