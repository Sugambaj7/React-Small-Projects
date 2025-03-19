import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "../features/Quiz-App/questionSlice";
import resultReducer from "../features/Quiz-App/resultSlice";

const store = configureStore({
  reducer: {
    question: questionReducer,
    result: resultReducer,
  },
});

export default store;
