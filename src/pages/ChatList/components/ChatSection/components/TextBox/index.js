import { View, Text } from "react-native";
import { textBoxStyles as styles } from "./styles";

export default function TextBox({ item }) {
  return (
    <>
      {item?.time_divider === true ? (
        <Text style={styles.timeDivider}>1 FEB 12:00</Text>
      ) : null}
      <View
        style={[
          styles.textBox,
          item?.sender_name == "Sokka" ? styles.me : null,
        ]}
      >
        <Text style={styles.content}>{item?.content}</Text>
      </View>
    </>
  );
}
