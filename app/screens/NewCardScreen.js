import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import uuid from "uuid/v1";

import { Container, Input, InputLabel, Button } from "../styled/components";
import { SIZES } from "../utils/sizes";
import { addDeckAsync } from "../actions/deck";

const FieldsWrapper = styled.View`
  margin-bottom: ${SIZES.MARGIN.LARGE};
`;

class NewDeckScreen extends Component {
  state = {
    title: ""
  };

  onDeckTitleChange = title => {
    this.setState({
      title
    });
  };

  createDeck = () => {
    const deck = {
      title: this.state.title,
      id: uuid()
    };

    this.props.dispatch(addDeckAsync(deck));

    this.onSaveNewDeck();
  };

  onSaveNewDeck() {
    this.setState(
      {
        title: ""
      },
      () => this.props.navigation.navigate("DeckList")
    );
  }

  render() {
    const isSaveButtonDisabled = this.state.title.trim().length === 0;

    return (
      <Container>
        <FieldsWrapper>
          <InputLabel>Deck Name</InputLabel>
          <Input
            placeholder="Deck name"
            onChangeText={this.onDeckTitleChange}
            value={this.state.title}
          />
        </FieldsWrapper>
        <Button
          type="success"
          onPress={this.createDeck}
          disabled={isSaveButtonDisabled}
        >
          Salvar
        </Button>
        <Button
          type="danger"
          onPress={this.createDeck}
          disabled={isSaveButtonDisabled}
        >
          Salvar
        </Button>
      </Container>
    );
  }
}

export default connect()(NewDeckScreen);
