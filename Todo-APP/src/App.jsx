import React, { useState, useEffect } from "react";
import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

const App = () => {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    console.log(updatedTodoArr, "updatedTodoArr");
    localStorage.setItem("allTodos", JSON.stringify(updatedTodoArr));
  };

  useEffect(() => {
    let savedTodos = JSON.parse(localStorage.getItem("allTodos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, [])

  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="What's the title of your todo?"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div className="todo-input-item">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="What's the description of your todo?"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>
          <div className="todo-input-item">
            <button className="primaryBtn" onClick={handleAddTodo}>
              Add
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button
            className={`secondaryBtn ${isCompleteScreen === false && "active"}`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondaryBtn ${isCompleteScreen === true && "active"}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>
        <div className="todo-list">
          {allTodos.map((todo, index) => {
            return (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{todo.title}</h3>
                  <p>{todo.description}</p>
                </div>
                <div>
                  <AiOutlineDelete className="delete-icon" />
                  <BsCheckLg className="check-icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
