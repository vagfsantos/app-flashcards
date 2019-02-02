import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Container, Button } from "../styled/components";
import { SIZES } from "../utils/sizes";
import { COLORS } from "../utils/colors";

const Wrapper = styled.View`
  justify-content: center;
  flex: 1;
  align-items: center;
`;

const DeckTitle = styled.Text`
  font-size: ${SIZES.FONTS.LARGE};
`;

const CardsQuantity = styled.Text`
  font-size: ${SIZES.FONTS.MEDIUM};
  color: ${COLORS.MAIN};
  margin-bottom: ${SIZES.MARGIN.LARGE};
`;

class DeckScreen extends Component {
  startGame = cards => {
    this.props.navigation.navigate("GameStack", { cards });
  };

  render() {
    const { deck } = this.props;

    return (
      <Container>
        <Wrapper>
          <Ionicons name="logo-buffer" size={120} color={COLORS.MAIN_DARK} />
          <DeckTitle>{deck.title}</DeckTitle>
          <CardsQuantity>{deck.cards.length} cards</CardsQuantity>
          <Button
            onPress={() => this.startGame(deck.cards)}
            type="success"
            disabled={deck.cards.length === 0}
          >
            Start
          </Button>
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => {
  const deck = state.decks.find(
    deck => deck.id === props.navigation.state.params.deckId
  );

  return {
    deck
  };
};

export default connect(mapStateToProps)(DeckScreen);
