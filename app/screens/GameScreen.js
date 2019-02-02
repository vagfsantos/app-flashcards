import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import notificationService from "../notifications";

import { Container, Button } from "../styled/components";
import { SIZES } from "../utils/sizes";
import { COLORS } from "../utils/colors";

const QuestionCard = ({ question }) => (
  <CardLight>
    <CardText>{question}</CardText>
  </CardLight>
);

const AnswerCard = ({ answer }) => (
  <CardDark>
    <CardText>{answer}</CardText>
  </CardDark>
);

const Card = styled.View`
  background-color: ${COLORS.GRAY_LIGHT};
  padding-horizontal: ${SIZES.MARGIN.MEDIUM};
  padding-vertical: ${SIZES.MARGIN.MEDIUM};
  border-radius: ${SIZES.BORDER_RADIUS};
  margin-bottom: ${SIZES.MARGIN.MEDIUM};
`;

const CardDark = styled(Card)`
  background-color: ${COLORS.MAIN};
`;

const CardLight = styled(Card)`
  background-color: ${COLORS.GRAY_LIGHT};
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

const GameOverText = styled.Text`
  font-size: ${SIZES.FONTS.MEDIUM};
  align-self: center;
`;

const CardTextGameOver = styled.Text`
  font-size: ${SIZES.FONTS.EXTRA_LARGE};
`;

const CardGameOver = styled(Card)`
  background-color: ${COLORS.SUPPORT};
  align-items: center;
  margin-vertical: ${SIZES.MARGIN.LARGE};
`;

const initialState = {
  currentCard: 0,
  showAnswer: false,
  score: 0,
  gameover: false
};

class GameScreen extends Component {
  state = {
    ...initialState
  };

  setShowAnswer = status => {
    this.setState({
      showAnswer: status
    });
  };

  onAnswer = isCorrect => {
    const nextCard = this.props.cards[this.state.currentCard + 1];

    this.setState(prevState => {
      return {
        currentCard: nextCard
          ? prevState.currentCard + 1
          : prevState.currentCard,
        showAnswer: false,
        score: isCorrect ? prevState.score + 10 : prevState.score,
        gameover: nextCard === undefined
      };
    });
  };

  onGameOver = status => {
    this.setState({ gameover: status });
    notificationService.cancelTodaysNotification();
  };

  resetGame = () => {
    return new Promise(resolve => {
      this.setState(
        {
          ...initialState
        },
        resolve
      );
    });
  };

  onBackToDecks = () => {
    this.resetGame().then(() => {
      this.props.navigation.goBack();
    });
  };

  render() {
    if (this.state.gameover) {
      return (
        <Container>
          <GameOverText>You did great!</GameOverText>
          <GameOverText>Look your final score</GameOverText>
          <CardGameOver>
            <CardTextGameOver>{this.state.score}</CardTextGameOver>
            <GameOverText>points</GameOverText>
          </CardGameOver>

          <Button onPress={() => this.resetGame()} type="success">
            Replay
          </Button>
          <Button onPress={this.onBackToDecks} type="danger">
            Back to decks
          </Button>
        </Container>
      );
    }

    return (
      <Container>
        <Score>{this.state.score} points</Score>
        {this.state.showAnswer === true ? (
          <AnswerCard {...this.props.cards[this.state.currentCard]} />
        ) : (
          <QuestionCard {...this.props.cards[this.state.currentCard]} />
        )}
        <QuestionCount>
          Question {this.state.currentCard + 1} / {this.props.cards.length}
        </QuestionCount>
        {this.state.showAnswer ? (
          <Fragment>
            <Button onPress={() => this.onAnswer(true)} type="success">
              Correct
            </Button>
            <Button onPress={() => this.onAnswer(false)} type="danger">
              Wrong
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            <Button onPress={() => this.setShowAnswer(true)} type="success">
              Answer
            </Button>
            <Button onPress={() => this.onGameOver()} type="danger">
              Exit
            </Button>
          </Fragment>
        )}
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
