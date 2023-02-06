import { createSlice } from "@reduxjs/toolkit";

export const storeIdSlice = createSlice({
  name: "storeId",
  initialState: {
    value: "1",
  },
  reducers: {
    setStoreId: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStoreId } = storeIdSlice.actions;

export default storeIdSlice.reducer;
