import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { Container, Input, InputLabel, Button } from "../styled/components";
import { SIZES } from "../utils/sizes";
import { addDeckAsync } from "../actions/deck";

const FieldsWrapper = styled.View`
  margin-bottom: ${SIZES.MARGIN.LARGE};
`;

class NewDeckScreen extends Component {
  state = {
    card: {
      question: "",
      answer: ""
    }
  };

  onQuestionChange = question => {
    this.setState({
      card: {
        ...this.state.card,
        question: question.trim()
      }
    });
  };

  onAnswerChange = answer => {
    this.setState({
      card: {
        ...this.state.card,
        answer: answer.trim()
      }
    });
  };

  onCancel = () => {
    this.resetAndGoBack();
  };

  resetAndGoBack = () => {
    this.setState(
      {
        card: {
          question: "",
          answer: ""
        }
      },
      () => this.props.navigation.goBack()
    );
  };

  createCard = () => {
    const card = this.state.card;
    this.props.dispatch(addDeckAsync(card));
    this.onSaveNewCard();
  };

  onSaveNewCard = () => {
    this.resetAndGoBack();
  };

  render() {
    const isSaveButtonDisabled = !(
      this.state.card.question && this.state.card.answer
    );

    return (
      <Container>
        <FieldsWrapper>
          <InputLabel>Question</InputLabel>
          <Input
            placeholder="Question"
            onChangeText={this.onQuestionChange}
            value={this.state.card.question}
          />
        </FieldsWrapper>
        <FieldsWrapper>
          <InputLabel>Answer</InputLabel>
          <Input
            placeholder="Question"
            onChangeText={this.onAnswerChange}
            value={this.state.card.answer}
          />
        </FieldsWrapper>

        <Button
          type="success"
          onPress={this.createDeck}
          disabled={isSaveButtonDisabled}
        >
          Salvar
        </Button>
        <Button type="danger" onPress={this.onCancel}>
          Cancelar
        </Button>
      </Container>
    );
  }
}

export default connect()(NewDeckScreen);
