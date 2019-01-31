import React from "react";
import styled from "styled-components";
import { StatusBar, View } from "react-native";
import { Constants } from "expo";

import { COLORS } from "../utils/colors";

const { GRAY_LIGHT, MAIN } = COLORS;

const StatusBarWrapper = styled.View`
  height: ${Constants.statusBarHeight};
  background-color: ${MAIN};
`;

const HeaderWrapper = styled.View`
  padding-right: 20;
  padding-left: 20;
  justify-content: center;
  height: 40;
  background-color: ${GRAY_LIGHT};
`;

const HeaderTitle = styled.Text`
  font-size: 18;
  font-weight: 300;
  text-transform: uppercase;
  color: ${MAIN};
`;

const Header = () => (
  <View>
    <StatusBarWrapper>
      <StatusBar />
    </StatusBarWrapper>
    <HeaderWrapper>
      <HeaderTitle>Flashcards</HeaderTitle>
    </HeaderWrapper>
  </View>
);

export default Header;
