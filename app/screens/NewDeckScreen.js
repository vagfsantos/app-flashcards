import React, { Component } from "react";
import styled from "styled-components";

import { Container, Input, InputLabel, Button } from "../styled/components";
import { SIZES } from "../utils/sizes";

const FieldsWrapper = styled.View`
  margin-bottom: ${SIZES.MARGIN.LARGE};
`;

class NewDeckScreen extends Component {
  render() {
    return (
      <Container>
        <FieldsWrapper>
          <InputLabel>Deck Name</InputLabel>
          <Input placeholder="Deck name" onChangeText={() => {}} />
        </FieldsWrapper>
        <Button type="success">Salvar</Button>
      </Container>
    );
  }
}

export default NewDeckScreen;
