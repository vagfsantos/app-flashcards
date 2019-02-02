import storage from "../storage";

export const ADD_DECK = "ADD_DECK";

const addDeck = deck => ({
  type: ADD_DECK,
  payload: {
    ...deck
  }
});

export const addDeckAsync = deck => dispatch => {
  storage
    .saveDeck(deck)
    .then(() => dispatch(addDeck(deck)))
    .catch(() => console.warn);
};
