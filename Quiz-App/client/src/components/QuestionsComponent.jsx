import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//custom hook
import { useFetchQuestion } from "../hooks/FetchQuestion";

const QuestionsComponent = ({onChecked}) => {

  //use state hook from getch question bata aako data
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  // const question = data[0];
  const question = useSelector(
    (state) => state.question.queue[state.question.trace]
  );

  useEffect(() => {
    // console.log(isLoading, "custom hook called");
    console.log(question, "iam from state");
  });

  function onSelect(index) {
    onChecked(index);
    console.log(index, "Radio btn changed");
  }
  if (isLoading) return <h3 className="text-light">Loading....</h3>;
  if (serverError) return <h3 className="text-light">Unknown Server Error</h3>;

  return (
    <div className="questions">
      <h2 className="text-light">{question?.question}</h2>
      <ul key={question?.id}>
        {question?.options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              value={true}
              name="options"
              id={`q${index + 1}-option`}
              onChange={() => onSelect(index)}
            />

            <label className="text-primary" htmlFor={`q${index + 1}-option`}>
              {option}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsComponent;
