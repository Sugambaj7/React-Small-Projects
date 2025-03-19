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
    },
    pushResultAction: (state, action) => {
      state.result.push(action.payload);
    },
    resetResultAction: (state) => {
      return {
        userId: null,
        result: [],
      };
    },
  },
});

export const { setUserId, pushResultAction, resetResultAction } = resultSlice.actions;
export default resultSlice.reducer;
