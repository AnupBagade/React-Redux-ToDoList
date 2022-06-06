import { createSelector } from "reselect";
/*
- Selectors are used to ease the maintenance of the component that utilizing data.
- Selectors are used to make component independent of data hierarchy.
- Selectors are unique in nature, if we require output of another selector, we can use reselect.
- createSelector of reselect takes variable number of arguments which can be selectors and the last argument
- of the createselector will consume the output of all the previous selectors as input. Even if there
- is a change in a hierarchy, it will be in one place or minimal places.
- CreateSelector make use of memoization. If there is no change in the input, output will remain same.
- It will recompute, only if the input is changed.

*/

export const getTodos = (state) => {
  return state.todos.data;
};

export const getLoadingStatus = (state) => {
  return state.todos.isLoading;
};

// export const getCompletedTodos = (state) => {
//   const todosList = state.todos.data.filter((todo) => {
//     return todo.completed;
//   });
//   return todosList;
// };
/*
Selectors are used to transform data from the store.
Above implementation and below implementation of getCompletedTodos yield same result, but 
*/
export const getCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.completed)
);

export const getPendingTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todos.completed)
);
