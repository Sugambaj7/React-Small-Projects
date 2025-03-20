//Function to dispatch push result
import * as Action from "../features/Quiz-App/resultSlice";
export const pushAnswer = (result) => async (dispatch) => {
  try {
    dispatch(Action.pushResultAction(result));
  } catch (err) {
    console.log(err);
  }
};

//function to reset answer given by user
export const ResetAnswer = () => async (dispatch) => {
  try {
    dispatch(Action.resetResultAction());
  } catch (err) {
    console.log(err);
  }
};

//function to update answer given by user
export const UpdateAnswer = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (err) {
    console.log(err);
  }
};
