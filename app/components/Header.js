import React from "react";
import styled from "styled-components";
import { StatusBar, View } from "react-native";
import { Constants } from "expo";

import { COLORS } from "../utils/colors";
import { SIZES } from "../utils/sizes";

const { GRAY_LIGHT, MAIN } = COLORS;
const { MARGIN, FONTS } = SIZES;

const StatusBarWrapper = styled.View`
  height: ${Constants.statusBarHeight};
  background-color: ${MAIN};
`;

const HeaderWrapper = styled.View`
  padding-right: ${MARGIN.MEDIUM};
  padding-left: ${MARGIN.MEDIUM};
  justify-content: center;
  height: 40;
  background-color: ${GRAY_LIGHT};
`;

const HeaderTitle = styled.Text`
  font-size: ${FONTS.NORMAL};
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
