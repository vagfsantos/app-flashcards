import { createStackNavigator, createAppContainer } from "react-navigation";

import DeckStack from "./DeckStack";
import DeckListStack from "./DeckListStack";

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
