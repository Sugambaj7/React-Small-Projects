import React from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import ResultTableComponent from "./ResultTableComponent";
const ResultComponent = () => {
  function onRestart() {
    console.log("Restart btn clicked");
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
          <span className="bold">10</span>
        </div>
        <div className="flex">
          <span>Total Questions</span>
          <span className="bold">10</span>
        </div>
        <div className="flex">
          <span>Total Attempts</span>
          <span className="bold">3</span>
        </div>
        <div className="flex">
          <span>Total Earn Points</span>
          <span className="bold">100</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span className="bold">First</span>
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
