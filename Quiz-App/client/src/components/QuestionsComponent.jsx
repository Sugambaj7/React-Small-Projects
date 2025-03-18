import React, { useState } from "react";
import data from "../utils/data";

const QuestionsComponent = () => {
  const [checked, setChecked] = useState(undefined);

  const question = data[0];
  function onSelect() {
    setChecked(true);
    console.log("Radio btn changed");
  }

  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>
      <ul key={question.id}>
        {question.options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              value={true}
              name="options"
              id={`q${index + 1}-option`}
              onChange={onSelect}
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
