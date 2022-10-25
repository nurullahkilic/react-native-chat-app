import { View, Text} from "react-native";
import { textBoxStyles as styles } from "./styles";

export default function TextBox({content}) {
  return (
    <View style={styles.container}>
        <Text style={styles.content}>{content}</Text>
    </View>
  );
}
