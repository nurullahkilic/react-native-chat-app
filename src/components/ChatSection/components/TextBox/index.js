import { View, Text } from "react-native";
import { TextBoxWrapper, TextContent, TimeDivider,textBoxStyles as styles } from "./styles";

export default function TextBox({ item }) {
  return (
    <>
      {item?.time_divider === true ? (
        <TimeDivider>1 FEB 12:00</TimeDivider>
      ) : null}
      <TextBoxWrapper isSenderMe={item?.sender_name == "Sokka"}>
        <TextContent>{item?.content}</TextContent>
      </TextBoxWrapper>
    </>
  );
}
