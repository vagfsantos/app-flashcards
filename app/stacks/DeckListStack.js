import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "react-navigation";

import DeckListScreen from "../screens/DeckListScreen";
import NewDeckScreen from "../screens/NewDeckScreen";
import { COLORS } from "../utils/colors";

const { MAIN, GRAY_DARK } = COLORS;

const navgationOptions = {
  tabBarOptions: {
    activeTintColor: MAIN,
    inactiveTintColor: GRAY_DARK
  }
};

const DeckListStack = createBottomTabNavigator(
  {
    DeckList: {
      screen: DeckListScreen,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-list" color={tintColor} size={26} />
        )
      }
    },
    NewDeck: {
      screen: NewDeckScreen,
      navigationOptions: {
        tabBarLabel: "New Deck",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-add-circle-outline" color={tintColor} size={26} />
        )
      }
    }
  },
  navgationOptions
);

export default DeckListStack;
