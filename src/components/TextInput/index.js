import { useState } from "react";
import { colors } from "../../config/colors";

import { Container, Input, Label } from "./styles";

export default function TextInput({ label, placeholderText, ...props }) {
  const [text, setText] = useState("");

  return (
    <Container>
      <Label>{label}</Label>
      <Input
        value={text}
        onChangeText={setText}
        selectionColor={colors.figma}
        placeholder={placeholderText}
        placeholderTextColor={"#d0d0d0"}
        {...props}
      />
    </Container>
  );
}
