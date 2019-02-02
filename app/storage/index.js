import { AsyncStorage } from "react-native";

const { stringfy: toString } = JSON;

export default {
  async saveDeck(deck) {
    await AsyncStorage.setItem(deck.id, toString(deck));
  }
};
