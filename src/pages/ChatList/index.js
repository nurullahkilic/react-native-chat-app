import * as React from "react";
import { SafeAreaView, Image, Button, Text } from "react-native";
import { colors } from "../../config/colors";

import ChatHeader from "./components/ChatHeader"
import ChatSection from "./components/ChatSection"
import SendInput from "./components/SendInput";

import { chatListPageStyles as styles } from "./styles"

export default function ChatList({ route, navigation }) {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ChatHeader navigation={navigation} uri={item?.uri} name={item?.name}/>
      <ChatSection>
        <SendInput/>
      </ChatSection>
    </SafeAreaView>
  );
}
