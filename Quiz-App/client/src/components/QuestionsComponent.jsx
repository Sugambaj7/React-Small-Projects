import React, { useState } from "react";

const QuestionsComponent = () => {
  const [checked, setChecked] = useState(undefined);
  function onSelect() {
    setChecked(true);
    console.log("Radio btn changed");
  }
  return (
    <div className="questions">
      <h2 className="text-light">Simple Question 1</h2>
      <ul>
        <li>
          <input
            type="radio"
            value={true}
            name="options"
            id="q1-option"
            onChange={onSelect}
          />

          <label className="text-primary" htmlFor="q1-option">
            option
          </label>
          <div className="check"></div>
        </li>
      </ul>
    </div>
  );
};

export default QuestionsComponent;
