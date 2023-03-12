import styled from "@emotion/native";
import { colors } from "../../config/colors";

const BANNER_SIZE = 250;

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 0;
  position: relative;
`;

export const TopImage = styled.ImageBackground`
  height: ${BANNER_SIZE + 'px'};
  width: 100%;
`;

export const InnerContent = styled.ScrollView`
  margin-top: -35px;
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: white;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  padding: 0 25px;
`;

export const TitleSection = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const BgText = styled.Text`
  font-family: "IBMPlexSansBold";
  font-size: 28px;
  line-height: 36px;
  color: #000000;
`;

export const SmText = styled.Text`
  font-family: ${({ isClickable }) =>
    isClickable ? "IBMPlexSansMedium" : "IBMPlexSansRegular"};
  font-size: 16px;
  line-height: 21px;
  color: ${({ isClickable }) =>
    isClickable ? "#03766e" : "#6a6a6a"};;
  padding: 0 3px;
`;

export const SignInButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputsContent = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 47px;
`;

export const ButtonContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 47px;
`;

export const Button = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  background-color: ${colors.figma};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const RegisterButton = styled(Button)`
  width: 48.5%;
  background-color: transparent;
  border: 1px solid #DEDEDE;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: "IBMPlexSansSemiBold";
  font-size: ${({fontSize})=>fontSize ? fontSize + 'px' : '16px'};
  line-height: 21px;
  color: ${({color})=>color ? color : 'white'};
  padding: 0 10px;
`;

export const ButtonDividerContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const ButtonDivider = styled.View`
  flex: 1;
  height: 1px;
  background-color: red;
  border-radius: 1px;
  background-color: #DEDEDE;
`;

