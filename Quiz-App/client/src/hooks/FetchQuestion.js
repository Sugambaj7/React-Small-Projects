/** This is a fetch question custom hook to fetch api data and set value to store */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import data from "../utils/data.js";

/** Redux Actions  **/
import * as Action from "../features/Quiz-App/questionSlice.js";

export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setData((prevState) => ({ ...prevState, isLoading: true }));

    //async function to fetch backend data(in this case from utils/data.js)
    //async anonymous function
    (async () => {
      try {
        let questions = await data;

        if (questions.length > 0) {
          setData((prev) => ({
            ...prev,
            isLoading: false,
            apiData: questions,
          }));
          dispatch(Action.startExamAction(questions));
        } else {
          throw new Error("No Question Available");
        }
      } catch (err) {
        setData((prevState) => ({
          ...prevState,
          isLoading: true,
          serverError: err,
        }));
      }
    })();
  }, [dispatch]);

  return [getData, setData];
};

/** Function to dispatch MoveToNextAction */

//Move to next question function return async function that takes an argument which we can  use to dispatch action as we cannot define hook inside function
export const MoveToNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveToNextAction());
  } catch (err) {
    console.log(err);
  }
};

/** Function to dispatch MoveToPrevAction */
export const MoveToPrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveToPrevAction());
  } catch (err) {
    console.log(err);
  }
};
