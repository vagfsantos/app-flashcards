import styled from "styled-components";

import { COLORS } from "../utils/colors";
import { SIZES } from "../utils/sizes";

const { GRAY_LIGHT } = COLORS;
const { MARGIN, BORDER_RADIUS, FONTS } = SIZES;

export const Main = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding-right: ${MARGIN.MEDIUM};
  padding-left: ${MARGIN.MEDIUM};
`;

export const Input = styled.TextInput`
  border-width: 1;
  border-color: ${GRAY_LIGHT};
  border-radius: ${BORDER_RADIUS};
  font-size: ${FONTS.NORMAL};
  height: 50;
`;
