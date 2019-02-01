import React from "react";
import styled from "styled-components";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../utils/colors";
import { SIZES } from "../utils/sizes";

const { GRAY_DARK, GRAY_LIGHT, MAIN, MAIN_DARK } = COLORS;
const { MARGIN, BORDER_RADIUS, FONTS } = SIZES;

const ListItem = styled.TouchableOpacity`
  background-color: ${GRAY_LIGHT};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${MARGIN.MEDIUM};
  padding-vertical: ${MARGIN.MEDIUM};
  border-radius: ${BORDER_RADIUS};
  margin-top: ${MARGIN.MEDIUM};
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  color: ${MAIN_DARK};
  font-size: ${FONTS.NORMAL};
  margin-left: 6;
`;

const CardsNumber = styled.Text`
  color: ${MAIN};
  font-size: ${FONTS.SMALL};
`;

const DeckItem = ({ deck }) => (
  <ListItem>
    <TitleWrapper>
      <MaterialCommunityIcons name="cards" color={GRAY_DARK} size={20} />
      <Title>{deck.title}</Title>
    </TitleWrapper>
    <CardsNumber>{deck.cards.length} cards</CardsNumber>
  </ListItem>
);

export default DeckItem;
