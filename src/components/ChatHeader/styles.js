import styled from "@emotion/native";
import { colors } from "../../config/colors";

const HEADER_SIZE = 70;

export const Container = styled.View`
  height: ${HEADER_SIZE + "px"};
  background-color: transparent;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom-color: ${colors.light};
  border-bottom-width: 0.3px;
`;

export const SearchWrapper = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 100%;
`;
