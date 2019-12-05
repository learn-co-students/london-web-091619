const defaultState = {
  counter: 0,
  keyPressed: null
};

const counter = (currentState = defaultState.counter, action) => {
  if (action.type === ACTION_TYPES.COUNT_UP) return currentState + 1;

  if (action.type === "COUNT_DOWN") return currentState - 1;

  return currentState;
};

const keyPressed = (currentState = defaultState.keyPressed, action) => {
  if (action.type === ACTION_TYPES.KEY_PRESS) return action.payload.key;

  return currentState;
};
