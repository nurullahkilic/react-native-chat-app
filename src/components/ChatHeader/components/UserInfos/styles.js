import styled from "@emotion/native";
import { colors } from "../../../../config/colors";

export const Content = styled.View`
  flex: 1;
  height: 100%;
  padding-left: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const UserText = styled.TouchableOpacity`
  flex: 1;
  margin-left: 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;

export const HeaderText = styled.Text`
  font-family: "IBMPlexSansBold";
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

export const StatusText = styled.Text`
  font-family: "IBMPlexSansRegular";
  font-size: 12px;
  color: ${colors.softText};
`;
