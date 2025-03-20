import React, { useEffect, useState } from "react";
import QuestionsComponent from "./QuestionsComponent";
import { useSelector, useDispatch } from "react-redux";
import { MoveToNextQuestion, MoveToPrevQuestion } from "../hooks/FetchQuestion";
import { pushAnswer } from "../hooks/setResult";
import { Navigate } from "react-router-dom";

const QuizComponent = () => {
  const [checkedQuestion, setCheckedQuestion] = useState(undefined);

  const { result } = useSelector((state) => state.result);
  const { trace, queue } = useSelector((state) => state.question);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(trace, "current trace here");
    console.log(result.length, "result length here");
  });

  function onPrev() {
    if (trace > 0) {
      dispatch(MoveToPrevQuestion());
    }
  }
  function onNext() {
    if (trace < queue.length) {
      dispatch(MoveToNextQuestion());
      if (result.length <= trace) {
        dispatch(pushAnswer(checkedQuestion));
      }
    }
  }

  function onChecked(check) {
    setCheckedQuestion(check);
  }

  //finish quiz
  if (result.length && result.length >= queue.length) {
    return <Navigate to="/result" />;
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* Quiz questions */}
      <QuestionsComponent onChecked={onChecked} />

      <div className="grid">
        {trace && trace > 0 && (
          <button className="btn prev" onClick={onPrev}>
            Prev
          </button>
        )}

        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizComponent;
