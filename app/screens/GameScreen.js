import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Container, Button } from "../styled/components";
import { SIZES } from "../utils/sizes";
import { COLORS } from "../utils/colors";

const QuestionCard = ({ question }) => (
  <Card>
    <CardText>{question}</CardText>
  </Card>
);

const AnswerCard = ({ answer }) => (
  <Card>
    <CardText>{answer}</CardText>
  </Card>
);

const Card = styled.View`
  background-color: ${COLORS.GRAY_LIGHT};
  padding-horizontal: ${SIZES.MARGIN.MEDIUM};
  padding-vertical: ${SIZES.MARGIN.MEDIUM};
  border-radius: ${SIZES.BORDER_RADIUS};
  margin-bottom: ${SIZES.MARGIN.MEDIUM};
`;

const CardText = styled.Text`
  font-size: ${SIZES.FONTS.MEDIUM};
`;

const Score = styled.Text`
  font-size: ${SIZES.FONTS.MEDIUM};
  color: ${COLORS.MAIN};
  align-self: flex-end;
  margin-bottom: ${SIZES.MARGIN.MEDIUM};
`;

const QuestionCount = styled.Text`
  font-size: ${SIZES.FONTS.SMALL};
  color: ${COLORS.GRAY_DARK};
  align-self: center;
  margin-bottom: ${SIZES.MARGIN.LARGE};
`;

class GameScreen extends Component {
  state = {
    currentCard: 0,
    showAnswer: false,
    score: 0,
    gameover: false
  };

  render() {
    return (
      <Container>
        <Score>{0} points</Score>

        {this.state.showAnswer === true ? (
          <AnswerCard {...this.props.cards[this.state.currentCard]} />
        ) : (
          <QuestionCard {...this.props.cards[this.state.currentCard]} />
        )}

        <QuestionCount>
          Question {this.state.currentCard} / {this.props.cards.length}
        </QuestionCount>

        <Button type="success">Answer</Button>
        <Button type="danger">Exit</Button>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    cards: props.navigation.state.params.cards
  };
};

export default connect(mapStateToProps)(GameScreen);
