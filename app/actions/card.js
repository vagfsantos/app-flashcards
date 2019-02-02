import storage from "../storage";

export const ADD_CARD = "ADD_CARD";

const addCard = (deckId, card) => ({
  type: ADD_CARD,
  payload: {
    deckId,
    card
  }
});

export const addCardAsync = (deckId, card) => (dispatch, getStore) => {
  dispatch(addCard(deckId, card));

  storage.saveAll(getStore()).catch(() => console.warn);
};
