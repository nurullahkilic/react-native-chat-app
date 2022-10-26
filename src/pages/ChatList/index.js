import * as React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { colors } from "../../config/colors";

import ChatHeader from "./components/ChatHeader";
import ChatSection from "./components/ChatSection";
import SendInput from "./components/SendInput";
import { ProfileModal } from "../../components/ModalView";

import { chatListPageStyles as styles } from "./styles";

import { useModal } from "../../context/ModalContext";

export default function ChatList({ route, navigation }) {
  const { isOpen, setIsOpen } = useModal();
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ChatHeader
        navigation={navigation}
        uri={item?.uri}
        name={item?.name}ü
      />
      <ChatSection>
        <SendInput />
      </ChatSection>
      <ProfileModal source={item?.uri} isOpen={isOpen} setIsOpen={setIsOpen} />
    </SafeAreaView>
  );
}
