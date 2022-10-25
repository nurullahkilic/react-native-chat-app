import { View ,Text} from "react-native";
import { messagesSectionStyles as styles } from "./styles";

import TextBox from "./components/TextBox";

export default function MessagesSection({ children, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent} >
        <TextBox content={"I commented on Figma, I want to add some fancy icons. Do you have any icon set?"}/>
        <TextBox content={"Next month?"}/>
        <TextBox content={"I am almost finish. Please give me your email, I will ZIP them and send you as son as im finish."}/>
        <TextBox content={"🥹🥹🥹🥹"}/>
      </View>
      {children }
    </View>
  );
}
