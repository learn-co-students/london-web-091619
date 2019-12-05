const combinedReducers = Redux.combineReducers({
  keyPressed,
  counter
});
const store = Redux.createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.ReduxStore = store;

store.subscribe(() => {
  const state = store.getState();
  counterValue.innerText = state.counter;
  keyValue.innerText = state.keyPressed;
});
