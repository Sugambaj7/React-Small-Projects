import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  result: [],
};

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    }
  },
});

export const { setUserId } = resultSlice.actions;
export default resultSlice.reducer;
