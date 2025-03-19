import React, { useEffect } from "react";
import QuestionsComponent from "./QuestionsComponent";
import { useSelector, useDispatch } from "react-redux";
import { MoveToNextQuestion, MoveToPrevQuestion } from "../hooks/FetchQuestion";
import { pushAnswer } from "../hooks/setResult";

const QuizComponent = () => {
  const { trace, queue } = useSelector((state) => state.question);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(trace, "quiz");
  });

  function onPrev() {
    if (trace > 0) {
      dispatch(MoveToPrevQuestion());
    }
  }
  function onNext() {
    if (trace < queue.length) {
      dispatch(MoveToNextQuestion());
      dispatch(pushAnswer(2));
    }
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* Quiz questions */}
      <QuestionsComponent />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizComponent;
