export const CREATE_TO_DO_TASK = "CREATE_TO_DO_TASK";

export const createToDo = (data) => {
  return {
    type: CREATE_TO_DO_TASK,
    payload: data
  };
};

export const REMOVE_TO_DO_TASK = "REMOVE_TO_DO_TASK";

export const removeToDo = (id) => {
  return { type: REMOVE_TO_DO_TASK, payload: { todoId: id } };
};

export const COMPLETE_TO_DO_TASK = "COMPLETE_TO_DO_TASK";

export const completeToDo = (id) => {
  return {
    type: COMPLETE_TO_DO_TASK,
    payload: { todoId: id }
  };
};

export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";

export const loadToDosInProgress = () => {
  return {
    type: LOAD_TODOS_IN_PROGRESS
  };
};

export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";

export const loadToDosSuccess = (todosList) => {
  return {
    type: LOAD_TODOS_SUCCESS,
    payload: { todosList }
  };
};

export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";

export const loadToDosFailure = () => {
  return {
    type: LOAD_TODOS_FAILURE
  };
};
