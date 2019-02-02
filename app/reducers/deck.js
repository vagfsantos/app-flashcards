import { ADD_DECK, GET_ALL_DECKS } from "../actions/deck";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_DECK:
      return state.concat({
        ...action.payload,
        cards: []
      });

    case GET_ALL_DECKS:
      return action.payload;

    default:
      return state;
  }
};
