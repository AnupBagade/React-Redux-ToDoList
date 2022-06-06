import {
  loadToDosInProgress,
  loadToDosSuccess,
  loadToDosFailure,
  createToDo
} from "./actions";

export const todosListThunk = () => async (dispatch, getState) => {
  try {
    console.log("isnide thunk ");
    dispatch(loadToDosInProgress());

    const response = await fetch("https://dummyjson.com/todos?limit=10");
    const todos = await response.json();
    // console.log(todos);
    dispatch(loadToDosSuccess(todos["todos"]));
  } catch (e) {
    dispatch(loadToDosFailure(e));
    console.log(e);
  }
};

export const createToDoThunk = (data) => async (dispatch, getState) => {
  try {
    // loading
    const todoBody = {
      todoData: data,
      todoCompleted: false,
      todoUserId: 5,
      todoId: 131
    };
    // API Request
    const response = await fetch("https://dummyjson.com/todos/add'", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todoBody })
    });
    //Success Message
    const respJSON = response.json();
    // console.log(respJSON);
    // const body = {
    //   todoData: data,
    //   todoCompleted: false,
    //   todoUserId: 5,
    //   todoId: 131
    // };
    // console.log(body);
    dispatch(createToDo(todoBody));
  } catch (e) {
    // Error Message
    // Load Error
    dispatch(loadToDosFailure(e));
  }
};
