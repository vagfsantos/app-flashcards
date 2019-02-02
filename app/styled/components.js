import React from "react";
import styled from "styled-components";

import { COLORS } from "../utils/colors";
import { SIZES } from "../utils/sizes";

const { GRAY_LIGHT, MAIN, MAIN_DARK, SUPPORT, SUPPORT_DARK } = COLORS;
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

const ButtonBaseStyle = styled.TouchableOpacity`
  width: 160;
  margin-bottom: ${MARGIN.MEDIUM};
  height: 50;
  border-radius: ${BORDER_RADIUS};
  justify-content: center;
  align-self: center;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;

const ButtonSuccess = styled(ButtonBaseStyle)`
  background-color: ${SUPPORT};
`;

const ButtonDanger = styled(ButtonBaseStyle)`
  background-color: ${MAIN};
`;

const ButtonTextBaseStyle = styled.Text`
  font-size: ${FONTS.MEDIUM};
  text-align: center;
`;

const ButtonSuccessText = styled(ButtonTextBaseStyle)`
  color: ${SUPPORT_DARK};
`;

const ButtonDangerText = styled(ButtonTextBaseStyle)`
  color: ${MAIN_DARK};
`;

export const Button = ({ type, children, ...props }) =>
  type === "success" ? (
    <ButtonSuccess {...props}>
      <ButtonSuccessText>{children}</ButtonSuccessText>
    </ButtonSuccess>
  ) : (
    <ButtonDanger {...props}>
      <ButtonDangerText>{children}</ButtonDangerText>
    </ButtonDanger>
  );
