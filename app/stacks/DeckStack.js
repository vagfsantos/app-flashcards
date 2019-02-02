import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "react-navigation";

import DeckScreen from "../screens/DeckScreen";
import NewCardScreen from "../screens/NewCardScreen";
import { COLORS } from "../utils/colors";

const { MAIN, GRAY_DARK } = COLORS;

const navgationOptions = {
  tabBarOptions: {
    activeTintColor: MAIN,
    inactiveTintColor: GRAY_DARK
  }
};

const DeckStack = createBottomTabNavigator(
  {
    Deck: {
      screen: DeckScreen,
      navigationOptions: {
        tabBarLabel: "Play",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-play" color={tintColor} size={26} />
        )
      }
    },
    NewCard: {
      screen: NewCardScreen,
      navigationOptions: {
        tabBarLabel: "Add Card",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-add-circle-outline" color={tintColor} size={26} />
        )
      }
    }
  },
  navgationOptions
);

export default DeckStack;
