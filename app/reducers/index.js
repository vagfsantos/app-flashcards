import { combineReducers } from "redux";
import reduceReducers from "reduce-reducers";

import deckReducer from "./deck";
import cardReducer from "./card";

const reducers = {
  decks: reduceReducers(deckReducer, cardReducer)
};

export default combineReducers(reducers);
