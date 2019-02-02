import { createStackNavigator, createAppContainer } from "react-navigation";

import DeckStack from "./DeckStack";
import DeckListStack from "./DeckListStack";
import GameStack from "./GameStack";

const RouteConfigs = {
  DeckListStack: {
    screen: DeckListStack,
    navigationOptions: {
      headerTitle: "Decks"
    }
  },

  DeckStack: {
    screen: DeckStack,
    navigationOptions: ({ navigation }) => ({
      headerTitle: `${navigation.state.params.title} Deck`
    })
  },

  GameStack: {
    screen: GameStack,
    navigationOptions: {
      headerTitle: "Playing"
    }
  }
};

const StackNavigatorConfig = {
  initialRouteName: "DeckListStack",
  headerMode: "float"
};

const Stacks = createAppContainer(
  createStackNavigator(RouteConfigs, StackNavigatorConfig)
);

export default Stacks;
