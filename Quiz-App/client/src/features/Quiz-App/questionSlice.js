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
      let {questions, answers} = action.payload;
      return {
        ...state,
        queue: questions,
        answers: answers,
      };
    },
    moveToNextAction: (state, action) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    moveToPrevAction: (state, action) => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
    resetAllAction: (state) => {
      return {
        queue: [],
        answers: [],
        trace: 0,
      };
    },
  },
});

export const {
  startExamAction,
  moveToNextAction,
  moveToPrevAction,
  resetAllAction,
} = questionSlice.actions;
export default questionSlice.reducer;
