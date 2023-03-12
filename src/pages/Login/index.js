import { useNavigation } from "@react-navigation/native";
import { useSession } from "../../context/SessionContext";

import {
  GradientContainer,
  TopSide,
  TextWrapper,
  HeroText,
  Description,
  ButtonWrapper,
  Button,
  ButtonText,
} from "./styles";

export default function Login() {
  const setIsLoggedIn = useSession(state => state.setIsLoggedIn);
  const navigation = useNavigation();

  return (
    <GradientContainer colors={["rgba(144, 218, 84, 0.9)", "#01746D"]}>
      <TopSide />
      <TextWrapper>
        <HeroText>Let’s Get Started</HeroText>
        <Description>
          Dizi ve film severlerin yeni sosyal medyasına hoş geldiniz!
        </Description>
      </TextWrapper>
      <ButtonWrapper>
        <Button
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Register")}
        >
          <ButtonText>Join Now</ButtonText>
        </Button>
        <Button
          activeOpacity={0.8}
          onPress={() => setIsLoggedIn(true)}
        >
          <ButtonText>Log In</ButtonText>
        </Button>
      </ButtonWrapper>
    </GradientContainer>
  );
}

