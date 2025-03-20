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
    updateResultAction: (state, action) => {
      const { trace, checked } = action.payload;
      console.log(action.payload, "k xa action.payload ma")
      state.result.fill(checked, trace, trace + 1);
    },
    resetResultAction: (state) => {
      return {
        userId: null,
        result: [],
      };
    },
  },
});

export const {
  setUserId,
  pushResultAction,
  resetResultAction,
  updateResultAction,
} = resultSlice.actions;
export default resultSlice.reducer;
