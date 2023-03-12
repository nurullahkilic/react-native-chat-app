import styled from "@emotion/native";
import { colors } from "../../../../config/colors";

export const TextBoxWrapper = styled.View`
  min-height: 49px;
  max-width: 75%;
  border-radius: 20px;
  background-color: ${({ isSenderMe }) =>
    isSenderMe ? colors.safe : colors.textBoxDark};
  padding: 10px 17px;
  align-self: ${({ isSenderMe }) => (isSenderMe ? "flex-end" : "flex-start")};
  justify-content: center;
  margin-top: 8px;
`;

export const TextContent = styled.Text`
  font-family: "IBMPlexSansRegular";
  font-size: 14px;
  line-height: 21px;
  color: white;
`;

export const TimeDivider = styled.Text`
  font-family: "IBMPlexSansRegular";
  font-size: 12px;
  line-height: 18px;
  color: ${colors.softText};
  align-self: center;
  margin-top: 18px;
  margin-bottom: 18px;
`;
