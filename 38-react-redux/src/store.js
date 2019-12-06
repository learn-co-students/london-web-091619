import { createStore } from "redux";

const defaultState = {
  bots: [],
  selectedBotId: null,
  enlistedBotIds: []
};

const reducer = (state = defaultState, action) => {
  if (action.type === "SET_BOTS")
    return {
      ...state,
      bots: [...action.payload.bots]
    };
  if (action.type === "SELECT_BOT")
    return {
      ...state,
      selectedBotId: action.payload.bot.id
    };
  if (action.type === "DESELECT_BOT")
    return {
      ...state,
      selectedBotId: null
    };
  if (action.type === "ENLIST_BOT")
    return {
      ...state,
      enlistedBotIds: [...state.enlistedBotIds, action.payload.bot.id]
    };
  if (action.type === "DISCHARGE_BOT")
    return {
      ...state,
      enlistedBotIds: state.enlistedBotIds.filter(
        bid => bid !== action.payload.bot.id
      )
    };
  console.log(action);
  return state;
};

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
