import { ADD_DECK, NEW_DECK } from "../actions/deck";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_DECK:
      return state.concat({
        id: action.id,
        title: action.title,
        cards: []
      });

    default:
      return state;
  }
};
