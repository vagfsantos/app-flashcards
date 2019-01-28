import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";

import { Container } from "../styled/components";
import DeckItem from "../components/DeckItem";

class DeckListScreen extends Component {
  render() {
    const { decks = [] } = this.props;

    return (
      <Container>
        {decks.length > 0 ? (
          <FlatList
            data={decks}
            renderItem={({ item }) => <DeckItem deck={item} />}
          />
        ) : (
          <View>
            <Text>You haven't created a deck yet!</Text>
          </View>
        )}
      </Container>
    );
  }
}

export default DeckListScreen;
