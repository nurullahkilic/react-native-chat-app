import { View ,FlatList} from "react-native";
import { messagesSectionStyles as styles } from "./styles";
import { CHAT } from "../../../../config/chat"

import TextBox from "./components/TextBox";

function DummyMessages(){
  return (
    <>
     <TextBox timeDivider={true} user={"Others"} content={"I commented on Figma, I want to add some fancy icons. Do you have any icon set?"}/>
        <TextBox user={"Me"} content={"I am in a process of designing some. When do you need them?"}/>
        <TextBox user={"Others"} content={"Next month?"}/>
        <TextBox user={"Me"} content={"I am almost finish. Please give me your email, I will ZIP them and send you as son as im finish."}/>
        <TextBox timeDivider={true} user={"Me"} content={"?"}/>
        <TextBox user={"Others"} content={"maciej.kowalski@email.com"}/>
        <TextBox user={"Others"} content={"🥹🥹🥹🥹"}/>
        <TextBox user={"Me"} content={"🥹"}/>
    </>
  )
}


export default function MessagesSection({ children, navigation }) {
  return (
    <View style={styles.container}>
        <FlatList
          data={CHAT}
          style={{
            flex:1,
            width:"100%",
            marginBottom:55,
          }}
          contentContainerStyle={{
            paddingHorizontal:12,
          }}
          inverted={true}
          showsVerticalScrollIndicator={true}
          renderItem={TextBox}
          keyExtractor={(item ,key) => key}
        />
      {children }
    </View>
  );
}
