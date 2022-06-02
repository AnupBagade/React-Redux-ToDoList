import React, { useState } from "react";
import "./ToDoForm.css";

const ToDoForm = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        placeholder="Enter the task name"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="new-todo-button">Submit</button>
    </div>
  );
};

export default ToDoForm;
