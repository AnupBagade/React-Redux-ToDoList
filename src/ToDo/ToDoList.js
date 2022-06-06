import React, { useEffect } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import { connect, dispatch } from "react-redux";
import { removeToDo, completeToDo } from "../DataManagement/actions";
import { todosListThunk } from "../DataManagement/thunks";
import styled from "styled-components";
import {
  getTodos,
  getLoadingStatus,
  getCompletedTodos,
  getPendingTodos
} from "../DataManagement/selectors";

const TodoContainerPending = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

const TodoContainerCompleted = styled(TodoContainerPending)`
  border-bottom: ${(props) => (props.status ? "3px solid green" : "None")};
`;

const ToDoList = ({
  pendingTodos,
  completedTodos,
  onRemove,
  onComplete,
  isLoading,
  loadTodos
}) => {
  const todoPendingBody = pendingTodos.map((todo) => {
    return (
      <TodoContainerPending>
        <ToDo todo={todo} removeToDo={onRemove} completeToDo={onComplete} />
      </TodoContainerPending>
    );
  });

  const todoCompeltedBody = completedTodos.map((todo) => {
    return (
      <TodoContainerCompleted status={true}>
        <ToDo todo={todo} removeToDo={onRemove} completeToDo={onComplete} />
      </TodoContainerCompleted>
    );
  });

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div style={{ maxWidth: "1000px", margin: "auto" }}>
      <ToDoForm />
      <h1>Pending Tasks</h1>
      {isLoading ? <h2>Loading tasks......</h2> : todoPendingBody}
      <h1>Completed Tasks</h1>
      {isLoading ? <h2>Loading tasks......</h2> : todoCompeltedBody}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: getTodos(state),
    isLoading: getLoadingStatus(state),
    pendingTodos: getPendingTodos(state),
    completedTodos: getCompletedTodos(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemove: (text) => dispatch(removeToDo(text)),
    onComplete: (text) => dispatch(completeToDo(text)),
    loadTodos: () => dispatch(todosListThunk())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
