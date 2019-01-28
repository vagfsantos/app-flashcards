import React from "react";
import styled from "styled-components";
import { StatusBar, View } from "react-native";
import { Constants } from "expo";

import { COLORS } from "../utils/colors";
import { Container } from "../styled/components";

const { GRAY_LIGHT, MAIN } = COLORS;

const StatusBarStyled = styled.View`
  height: ${Constants.statusBarHeight};
  background-color: ${MAIN};
`;

const HeaderStyled = styled.View`
  justify-content: center;
  height: 40;
  background-color: ${GRAY_LIGHT};
`;

const HeaderTitleStyled = styled.Text`
  font-size: 18;
  font-weight: 300;
  text-transform: uppercase;
  color: ${MAIN};
`;

const Header = () => (
  <View>
    <StatusBarStyled>
      <StatusBar />
    </StatusBarStyled>
    <HeaderStyled>
      <Container>
        <HeaderTitleStyled>Flashcards</HeaderTitleStyled>
      </Container>
    </HeaderStyled>
  </View>
);

export default Header;
