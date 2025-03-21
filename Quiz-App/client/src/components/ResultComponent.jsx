import React from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import ResultTableComponent from "./ResultTableComponent";
import { useDispatch, useSelector } from "react-redux";
import { ResetAnswer } from "../hooks/setResult";
import { ResetAllQuestion } from "../hooks/FetchQuestion";
import {
  attempts_NumberOfQuestion,
  earnedPoints_Number,
  flagResult,
} from "../helper/helper";

const ResultComponent = () => {
  const dispatch = useDispatch();
  const {
    question: { queue, answers },
    result: { userId, result },
  } = useSelector((state) => state);

  console.log(result, "state bata");

  const totalPoints = queue.length * 10;
  const totalAttemptedQuestion = attempts_NumberOfQuestion(result);
  const earnedPoints = earnedPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnedPoints);

  // console.log(earnedPoints, "earned points");
  // console.log(flag, "flage value");

  function onRestart() {
    dispatch(ResetAnswer());
    dispatch(ResetAllQuestion());
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">Sugam</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points</span>
          <span className="bold">{totalPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Total Questions</span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex">
          <span>Attempted Question</span>
          <span className="bold">{totalAttemptedQuestion || 0}</span>
        </div>
        <div className="flex">
          <span>Total Earn Points</span>
          <span className="bold">{earnedPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span
            style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}
            className="bold"
          >
            {flag ? "Pass" : "Fail"}
          </span>
        </div>
      </div>

      <div className="start">
        <Link to="/" className="btn" onClick={onRestart}>
          Start Again
        </Link>
      </div>

      <div className="container">
        <ResultTableComponent />
      </div>
    </div>
  );
};

export default ResultComponent;
