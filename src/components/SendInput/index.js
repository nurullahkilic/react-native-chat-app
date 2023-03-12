import { useState } from "react";

import { Container, Input, CameraWrapper, SendWrapper } from "./styles";
import { colors } from "../../config/colors";

import { Camera, Send } from "../icons";

export default function SendInput({ name, uri, navigation }) {
  const [text, setText] = useState("");

  return (
    <Container>
      <CameraWrapper onPress={() => alert("helloo")}>
        <Camera width={19} />
      </CameraWrapper>
      <Input
        placeholderTextColor={colors.softText}
        value={text}
        onChangeText={setText}
        selectionColor="white"
        placeholder="Bir şeyler yaz..."
      />
      <SendWrapper onPress={() => alert(text)}>
        <Send width={27} height={27} />
      </SendWrapper>
    </Container>
  );
}
