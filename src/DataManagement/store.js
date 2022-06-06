import { combineReducers, createStore, applyMiddleware } from "redux";
import { todos } from "./reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import automergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
// create reducers object
const reducers = {
  todos
};

// create persistconfig. Tells react, how to save and where to save data.
const persistconfig = {
  key: "root",
  storage,
  stateReconciler: automergeLevel2
};

// pass reducers to combineReducers and store in rootReducer
const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistconfig, rootReducer);
// pass rootReducer to createStore.
// const configureStore = createStore(rootReducer);
const configureStore = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default configureStore;
