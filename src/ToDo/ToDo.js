import React from "react";
import "./ToDo.css";
import styled from "styled-components";

const TodoContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
  border-bottom: ${(props) =>
    props.status ? "3px solid green" : "2px solid red"};
`;

const ToDo = ({ todo, removeToDo, completeToDo }) => {
  return (
    <>
      <h4>{todo.todo}</h4>
      <div className="buttons-container">
        {!todo.completed ? (
          <button
            className="completed-button"
            onClick={() => completeToDo(todo.id)}
          >
            Complete Task
          </button>
        ) : null}
        <button className="remove-button" onClick={() => removeToDo(todo.id)}>
          Remove
        </button>
      </div>
    </>
  );
};

export default ToDo;
