import { AsyncStorage } from "react-native";

const STORAGE_KEY = "FLASH_CARDS";
const NOTIFICATION_KEY = "NOTIFICATIONS_ID";
const { stringify: toString, parse } = JSON;

export default {
  async saveAll(decks) {
    return AsyncStorage.setItem(STORAGE_KEY, toString(decks));
  },

  async fetchAllDecks() {
    return AsyncStorage.getItem(STORAGE_KEY).then(decks => parse(decks));
  },

  async setGameplayed() {
    const todayKey = new Date().toDateString();
    return AsyncStorage.setItem(todayKey, toString(true));
  },

  async fetchGamePlayedToday() {
    const todayKey = new Date().toDateString();
    return AsyncStorage.getItem(todayKey).then(todayPlayed =>
      parse(todayPlayed)
    );
  },

  async saveScheduledNotificationId(id) {
    return AsyncStorage.setItem(NOTIFICATION_KEY, toString(id));
  },

  async getScheduledNotificationId() {
    return AsyncStorage.getItem(NOTIFICATION_KEY).then(id => parse(id));
  },

  async removeScheduledNotificationId() {
    return AsyncStorage.setItem(NOTIFICATION_KEY, "");
  }
};
