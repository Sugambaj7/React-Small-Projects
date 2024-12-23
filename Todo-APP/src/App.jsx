import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label htmlFor="">Title</label>
            <input type="text" placeholder="What's the title of your todo?" />
          </div>
          <div className="todo-input-item">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="What's the description of your todo?"
            />
          </div>
          <div className="todo-input-item">
            <button className="primaryBtn">Add</button>
          </div>
        </div>
        <div className="btn-area">
          <button
            className={`secondaryBtn ${
              isCompleteScreen === false && "active"
            }`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondaryBtn ${
              isCompleteScreen === true && "active"
            }`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>
        <div className="todo-list">
          <div className="todo-list-item">
            <h3>Task 1</h3>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
