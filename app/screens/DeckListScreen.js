import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Container } from "../styled/components";
import DeckItem from "../components/DeckItem";
import { fecthAllDecksAsync } from "../actions/deck";

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
  componentDidMount() {
    this.props.dispatch(fecthAllDecksAsync());
  }

  render() {
    const { decks } = this.props;

    return (
      <Container>
        {decks.length > 0 ? (
          <DeckList
            data={decks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <DeckItem deck={item} key={item.id} />}
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

const mapStateToProps = state => {
  return {
    decks: state.decks
  };
};

export default connect(mapStateToProps)(DeckListScreen);
