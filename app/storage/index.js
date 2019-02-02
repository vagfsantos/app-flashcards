import { AsyncStorage } from "react-native";

const STORAGE_KEY = "FLASH_CARDS";
const { stringify: toString, parse } = JSON;

export default {
  saveAll(decks) {
    return AsyncStorage.setItem(STORAGE_KEY, toString(decks));
  },

  async fetchAllDecks() {
    return AsyncStorage.getItem(STORAGE_KEY).then(decks => parse(decks));
  }
};
