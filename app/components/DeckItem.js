import React from "react";
import styled from "styled-components";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../utils/colors";

const { GRAY_DARK, GRAY_LIGHT, MAIN, MAIN_DARK } = COLORS;

const ListItem = styled.TouchableOpacity`
  background-color: ${GRAY_LIGHT};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 20;
  padding-vertical: 20;
  border-radius: ${6};
  margin-top: ${20};
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  color: ${MAIN_DARK};
  font-size: ${18};
  margin-left: 6;
`;

const CardsNumber = styled.Text`
  color: ${MAIN};
  font-size: ${14};
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
