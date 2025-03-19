import React, { useEffect } from "react";
import QuestionsComponent from "./QuestionsComponent";
import { useSelector, useDispatch } from "react-redux";
import { MoveToNextQuestion } from "../hooks/FetchQuestion";

const QuizComponent = () => {
  const trace = useSelector((state) => state.question.trace);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(trace, "quiz");
  });

  //prev button event handler
  function onPrev() {
    console.log("Prev btn clicked");
  }

  //next button event handler
  function onNext() {
    dispatch(MoveToNextQuestion());
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
