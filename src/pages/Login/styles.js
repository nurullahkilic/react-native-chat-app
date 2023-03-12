import styled from "@emotion/native";
import { colors } from "../../config/colors";

import { LinearGradient } from "expo-linear-gradient";

export const GradientContainer = styled(LinearGradient)`
  flex: 1;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 88px;
`;

export const TopSide = styled.View`
  height: 540px;
  width: 100%;
`;

export const TextWrapper = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 25px;
`;

export const HeroText = styled.Text`
  font-family: "IBMPlexSansBold";
  font-size: 64px;
  line-height: 70px;
  color: #ffffff;
`;

export const Description = styled.Text`
  width: 70%;
  font-family: "IBMPlexSansRegular";
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 25px;
  margin-top: 70px;
`;

export const Button = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const ButtonText = styled.Text`
  font-family: "IBMPlexSansSemiBold";
  font-size: 16px;
  line-height: 21px;
  color: ${colors.figma};
`;
