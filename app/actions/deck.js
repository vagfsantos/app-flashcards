import storage from "../storage";

export const ADD_DECK = "ADD_DECK";
export const GET_ALL_DECKS = "GET_ALL_DECKS";

const addDeck = deck => ({
  type: ADD_DECK,
  payload: {
    ...deck
  }
});

const fetchAllDecks = decks => ({
  type: GET_ALL_DECKS,
  payload: decks
});

export const addDeckAsync = deck => (dispatch, getStore) => {
  dispatch(addDeck(deck));

  storage.saveAll(getStore()).catch(() => console.warn);
};

export const fecthAllDecksAsync = () => dispatch => {
  storage
    .fetchAllDecks()
    .then(({ decks }) => dispatch(fetchAllDecks(decks)))
    .catch(() => console.warn);
};
