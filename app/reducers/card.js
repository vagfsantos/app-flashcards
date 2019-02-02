import { ADD_CARD } from "../actions/card";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return state.map(deck => {
        if (deck.id === action.payload.deckId) {
          return {
            ...deck,
            cards: deck.cards.concat(action.payload.card)
          };
        }

        return deck;
      });

    default:
      return state;
  }
};
