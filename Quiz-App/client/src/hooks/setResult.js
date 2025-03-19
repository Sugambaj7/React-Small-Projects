//Function to dispatch push result
import * as Action from "../features/Quiz-App/resultSlice";
export const pushAnswer = (result) => async (dispatch) => {
  try {
    dispatch(Action.pushResultAction(result));
  } catch (err) {
    console.log(err);
  }
};
