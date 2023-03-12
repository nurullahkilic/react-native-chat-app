import { FlatList, KeyboardAvoidingView } from "react-native";
import { css } from "@emotion/native";

import { Container } from "./styles";
import { CHAT } from "../../config/chat";

import SendInput from "../SendInput";
import TextBox from "./components/TextBox";

export default function MessagesSection() {
  return (
    <KeyboardAvoidingView
      enabled
      keyboardVerticalOffset={10}
      behavior={Platform.OS === "ios" ? "padding" : false}
      style={css`
      flex: 1;
      width: 100%;
      `}
    >
      <Container>
        <FlatList
          data={CHAT}
          style={css`
            flex: 1;
            width: 100%;
            margin-bottom: 55px;
          `}
          contentContainerStyle={css`
            padding: 0 12px;
          `}
          inverted={true}
          showsVerticalScrollIndicator={true}
          renderItem={TextBox}
          keyExtractor={(_, key) => key}
        />
        <SendInput />
      </Container>
    </KeyboardAvoidingView>
  );
}
