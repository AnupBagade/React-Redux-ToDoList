import React from "react";
import "./ToDo.css";

const ToDo = () => {
  return (
    <div className="todo-item-container">
      <h4>To Do Demo Item</h4>
      <div className="buttons-container">
        <button className="completed-button">Completed</button>
        <button className="remove-button">Remove</button>
      </div>
    </div>
  );
};

export default ToDo;
