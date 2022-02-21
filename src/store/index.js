import { combineReducers, createStore } from "redux";
import { loadState, saveState } from "./localstorage";
import reducers from "./Reducers";

const loadedState = loadState();

const store = createStore(
  combineReducers({
    auth: reducers.auth,
  }),
  loadedState
);

store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});

export default store;
