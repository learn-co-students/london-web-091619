// DOM ELEMENTS
const counterValue = document.querySelector("#counter-value");
const keyValue = document.querySelector("#key-value");
const buttonUp = document.querySelector("button");
const buttonDown = document.querySelector("#down");

setInterval(() => {
  store.dispatch({ type: ACTION_TYPES.COUNT_UP });
}, 1000);

buttonUp.addEventListener("click", () =>
  store.dispatch({ type: ACTION_TYPES.COUNT_UP })
);
buttonDown.addEventListener("click", () =>
  store.dispatch({ type: "COUNT_DOWN" })
);

document.addEventListener("keydown", e => {
  store.dispatch({ type: ACTION_TYPES.KEY_PRESS, payload: { key: e.key } });
});
