import styled from "@emotion/native";
import { colors } from "../../../../config/colors";

export const GoBackInner = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-left: 2px;
`;

export const UnreadedMessages = styled.Text`
  font-size: 18px;
  color: ${colors.figma};
`;
