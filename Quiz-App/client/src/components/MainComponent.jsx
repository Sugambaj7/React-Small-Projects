import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import { useDispatch } from "react-redux";
import { setUserId } from "../features/Quiz-App/resultSlice";
const MainComponent = () => {
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  function startQuiz() {
    if (inputRef.current?.value) {
      console.log(inputRef.current?.value);
      dispatch(setUserId(inputRef.current?.value));
    }
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>
          Each question has three options. You can choose only one option.
        </li>
        <li>You can review and change answers before the quiz completion.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <form id="form">
        <input
          type="text"
          className="userid"
          placeholder="Username*"
          ref={inputRef}
        />
      </form>

      <div className="start">
        <Link to="/quiz" className="btn" onClick={startQuiz}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default MainComponent;
