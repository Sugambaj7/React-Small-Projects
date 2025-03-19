import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queue: [],
  answers: [],
  trace: 0,
};

export const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    startExamAction: (state, action) => {
      return {
        ...state,
        queue: action.payload,
      };
    },
    moveToNextAction: (state, action) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
  },
});

export const { startExamAction, moveToNextAction } = questionSlice.actions;
export default questionSlice.reducer;
