import * as React from "react";

import ChatHeader from "../../components/ChatHeader";
import ChatSection from "../../components/ChatSection";
import SendInput from "../../components/SendInput";
import { ProfileModal } from "../../components/ModalView";

import { Container } from "./styles";

import { useModal } from "../../context/ModalContext";

export default function ChatList({ route, navigation }) {
  const { isOpen, setIsOpen } = useModal();
  const { item } = route.params;

  return (
    <Container>
      <ChatHeader
        navigation={navigation}
        uri={item?.uri}
        name={item?.name}
      />
      <ChatSection>
        <SendInput />
      </ChatSection>
      <ProfileModal source={item?.uri} isOpen={isOpen} setIsOpen={setIsOpen} />
    </Container>
  );
}
