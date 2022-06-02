import React from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

const ToDoList = ({ todos = [] }) => {
  return (
    <>
      <ToDoForm />
      {todos.map((todo) => {
        return <ToDo todo={todo} />;
      })}
    </>
  );
};

export default ToDoList;
