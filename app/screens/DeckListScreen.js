import React, { Component } from "react";
import styled from "styled-components";

import { Container } from "../styled/components";
import DeckItem from "../components/DeckItem";

const EmptyDeck = styled.View`
  flex: 1;
  justify-content: center;
`;

const EmptyDeckText = styled.Text`
  text-align: center;
  font-size: 18;
`;

const DeckList = styled.FlatList`
  flex: 1;
`;

class DeckListScreen extends Component {
  render() {
    const { decks = [] } = this.props;

    return (
      <Container>
        {decks.length > 0 ? (
          <DeckList
            data={decks}
            renderItem={({ item }) => <DeckItem deck={item} />}
          />
        ) : (
          <EmptyDeck>
            <EmptyDeckText>You haven't created a deck yet!</EmptyDeckText>
          </EmptyDeck>
        )}
      </Container>
    );
  }
}

export default DeckListScreen;
