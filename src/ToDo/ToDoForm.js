import React, { useState } from "react";
import { createToDoThunk } from "../DataManagement/thunks";
import "./ToDoForm.css";
import { connect, dispatch } from "react-redux";
import { createToDo } from "../DataManagement/actions";
import { getTodos } from "../DataManagement/selectors";

const ToDoForm = ({ todos, CreateToDoTask }) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = () => {
    CreateToDoTask(inputValue);
    setInputValue("");
  };

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        placeholder="Enter the task name"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="new-todo-button" onClick={() => onSubmit()}>
        Submit
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: getTodos(state) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    CreateToDoTask: (data) => dispatch(createToDoThunk(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
