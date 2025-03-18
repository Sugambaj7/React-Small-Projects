import React from "react";
import QuestionsComponent from "./QuestionsComponent";

const QuizComponent = () => {
  //prev button event handler
  function onPrev() {
    console.log("Prev btn clicked");
  }

  //next button event handler
  function onNext() {
    console.log("Next btn clicked");
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
