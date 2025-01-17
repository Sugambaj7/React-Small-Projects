import React, { useState, useEffect } from "react";
import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

const App = () => {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

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
    let savedCompletedTodos = JSON.parse(
      localStorage.getItem("completedTodos")
    );

    if (savedTodos) {
      setTodos(savedTodos);
    }
    if (savedCompletedTodos) {
      setCompletedTodos(savedCompletedTodos);
    }
  }, []);

  const handleDeleteTodo = (index) => {
    let reducedTodos = [...allTodos];
    reducedTodos.splice(index, 1);
    localStorage.setItem("allTodos", JSON.stringify(reducedTodos));
    setTodos(reducedTodos);
  };

  const handleDeleteCompletedTodo = (index) => {
    let reducedCompletedTodos = [...completedTodos];
    reducedCompletedTodos.splice(index, 1);
    localStorage.setItem(
      "completedTodos",
      JSON.stringify(reducedCompletedTodos)
    );
    setCompletedTodos(reducedCompletedTodos);
  };

  const handleCompletedTodo = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn =
      dd + "-" + mm + "-" + yyyy + " at " + h + ":" + m + ":" + s;

    let filteredTodos = {
      ...allTodos[index],
      completedOn: completedOn,
    };

    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredTodos);
    setCompletedTodos(updatedCompletedArr);

    handleDeleteTodo(index);
    localStorage.setItem("completedTodos", JSON.stringify(updatedCompletedArr));
    setCompletedTodos(updatedCompletedArr);
  };

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
          {isCompleteScreen === false}
          {isCompleteScreen === false &&
            allTodos.map((todo, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                  </div>
                  <div>
                    <AiOutlineDelete
                      className="delete-icon"
                      onClick={() => handleDeleteTodo(index)}
                    />
                    <BsCheckLg
                      className="check-icon"
                      onClick={() => handleCompletedTodo(index)}
                    />
                  </div>
                </div>
              );
            })}
          {isCompleteScreen === true &&
            completedTodos.map((completedTodo, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{completedTodo.title}</h3>
                    <p>{completedTodo.description}</p>
                    <p>
                      <small>Completed On: {completedTodo.completedOn}</small>
                    </p>
                  </div>
                  <div>
                    <AiOutlineDelete
                      className="delete-icon"
                      onClick={() => handleDeleteCompletedTodo(index)}
                    />
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
