import React from "react";
import styled from "styled-components";

import { COLORS } from "../utils/colors";
import { SIZES } from "../utils/sizes";

const { GRAY_LIGHT, MAIN, SUPPORT, SUPPORT_DARK } = COLORS;
const { MARGIN, BORDER_RADIUS, FONTS } = SIZES;

export const Main = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding-vertical: ${MARGIN.LARGE};
  padding-horizontal: ${MARGIN.MEDIUM};
`;

export const Input = styled.TextInput`
  border-width: 1;
  border-color: ${GRAY_LIGHT};
  border-radius: ${BORDER_RADIUS};
  font-size: ${FONTS.NORMAL};
  height: 50;
  padding-horizontal: ${MARGIN.MEDIUM};
  margin-bottom: ${MARGIN.SMALL};
`;

export const InputLabel = styled.Text`
  color: ${MAIN};
  font-size: ${FONTS.NORMAL};
  margin-bottom: ${MARGIN.SMALL};
`;

const ButtonSuccess = styled.TouchableOpacity`
  width: 160;
  background-color: ${SUPPORT};
  margin-bottom: ${MARGIN.MEDIUM};
  height: 50;
  border-radius: ${BORDER_RADIUS};
  justify-content: center;
  align-self: center;
`;

const ButtonSuccessText = styled.Text`
  color: ${SUPPORT_DARK};
  font-size: ${FONTS.MEDIUM};
  text-align: center;
`;

export const Button = ({ type, children, ...props }) =>
  type === "success" ? (
    <ButtonSuccess {...props}>
      <ButtonSuccessText>{children}</ButtonSuccessText>
    </ButtonSuccess>
  ) : null;
