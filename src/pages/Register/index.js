import { KeyboardAvoidingView } from "react-native";
import { css } from "@emotion/native";

import { StatusBar } from "expo-status-bar";

import {
  Container,
  TopImage,
  InnerContent,
  TitleSection,
  BgText,
  SmText,
  SignInButton,
  InputsContent,
  Button,
  ButtonDividerContent,
  ButtonDivider,
  ButtonText,
  RegisterButton,
  ButtonContent,
} from "./styles";
import { Google, Facebook } from "../../components/icons";
import TextInput from "../../components/TextInput";

import { useSession } from "../../context/SessionContext";

export default function Register() {
  const setIsLoggedIn = useSession((state)=>state.setIsLoggedIn);

  const bannerUri =
    "https://efsanekareler.com/upload/media/entries/2019-05/06/699-0-4e1dbab781e52b5678335c828379e1b5.jpg";

  return (
    <>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        enabled
        keyboardVerticalOffset={20}
        behavior={Platform.OS === "ios" ? "padding" : false}
        style={css`
          flex: 1;
          width: 100%;
          background-color: white;
        `}
      >
        <Container>
          <TopImage source={{ uri: bannerUri }} />
          <InnerContent>
            <TitleSection>
              <BgText>Create an account.</BgText>
              <SignInButton>
                <SmText>Already a member?</SmText>
                <SmText isClickable={true}>Sign In.</SmText>
              </SignInButton>
            </TitleSection>
            <InputsContent>
              <TextInput
                label={"Your e-mail"}
                placeholderText={"Enter your e-mail"}
                marginBottom={16}
                keyboardType="email"
              />
              <TextInput
                label={"Password"}
                placeholderText={"Enter your password"}
                marginBottom={16}
              />
              <TextInput
                label={"Password Confirm"}
                placeholderText={"Repeat your password"}
              />
            </InputsContent>
            <Button activeOpacity={0.8} onPress={() => setIsLoggedIn(true)}>
              <ButtonText>Log In</ButtonText>
            </Button>
            <ButtonDividerContent>
              <ButtonDivider />
              <ButtonText color={"#B4B4B4"}>or</ButtonText>
              <ButtonDivider />
            </ButtonDividerContent>
            <ButtonContent>
              <RegisterButton
                activeOpacity={0.8}
                onPress={() => alert("Google")}
              >
                <Google fill={"#979797"} />
                <ButtonText color={"#979797"}>Google</ButtonText>
              </RegisterButton>
              <RegisterButton
                activeOpacity={0.8}
                onPress={() => alert("Facebook")}
              >
                <Facebook fill={"#979797"} />
                <ButtonText color={"#979797"}>Facebook</ButtonText>
              </RegisterButton>
            </ButtonContent>
          </InnerContent>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
}
