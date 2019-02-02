import { combineReducers } from "redux";

import deckReducer from "./deck";

const reducers = {
  decks: deckReducer
};

export default combineReducers(reducers);
