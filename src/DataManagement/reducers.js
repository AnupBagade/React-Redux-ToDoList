import {
  CREATE_TO_DO_TASK,
  REMOVE_TO_DO_TASK,
  COMPLETE_TO_DO_TASK,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE
} from "./actions";

// export const todosLoading = (state = false, action) => {
//   const { type } = { action };

//   switch (type) {
//     case LOAD_TODOS_IN_PROGRESS: {
//       return true;
//     }
//     case LOAD_TODOS_SUCCESS:
//     case LOAD_TODOS_FAILURE:
//       return false;
//     default: {
//       return state;
//     }
//   }
// };

const initialState = { isLoading: false, data: [] };

export const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TO_DO_TASK: {
      const { todId, todoData, todoCompleted, todoUserId } = payload;
      const newToDo = {
        id: todId,
        todo: todoData,
        completed: todoCompleted,
        userId: todoUserId
      };
      return { ...state, data: [...state.data, newToDo] };
    }
    case REMOVE_TO_DO_TASK: {
      const { todoId } = payload;
      // const toDosList = [...state]
      const newToDoList = state.data.filter((todo) => {
        return todo.id !== todoId;
      });
      return {
        ...state,
        data: [...newToDoList]
      };
    }

    case COMPLETE_TO_DO_TASK: {
      const todosList = [...state.data];
      const { todoId } = payload;
      for (let i = 0; i < todosList.length; i++) {
        if (todosList[i].id === todoId) {
          todosList[i].completed = true;
        }
      }
      return {
        ...state,
        data: [...todosList]
      };
    }

    case LOAD_TODOS_SUCCESS: {
      const { todosList } = payload;
      return {
        ...state,
        isLoading: false,
        data: [...todosList]
      };
    }

    case LOAD_TODOS_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true
      };
    }
    case LOAD_TODOS_FAILURE: {
      return {
        ...state,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
};
