// const initialState = {};

// const product = (state = initialState, action) => {
//   switch (action.type) {
//     case "SAVE_PRODUCT":
//       return state;
//     case "SET_PRODUCT":
//       return {
//         ...state,
//         data: action.payload,
//       };
//     case "GET_STORE_PRODUCT":
//       return {
//         ...state,
//         data: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default product;

import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    value: [],
  },
  reducers: {
    setProduct: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
