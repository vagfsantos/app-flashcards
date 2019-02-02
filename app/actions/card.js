import storage from "../storage";

export const ADD_CARD = "ADD_CARD";

const addCard = (deckId, card) => ({
  type: ADD_CARD,
  payload: {
    deckId,
    card
  }
});

export const addCardAsync = card => (dispatch, getStore) => {
  dispatch(addCard(card));

  storage.saveAll(getStore()).catch(() => console.warn);
};
