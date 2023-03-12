import {
  Container,
  Image,
  TextContent,
  MessageInfos,
  SenderName,
  LastMessage,
  RightSide,
  Date,
  NewNoti,
  NotiCount,
} from "./styles";

export default function ChatListItem({ item, navigation }) {
  return (
    <Container
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate("chatDetails", {
          item,
        })
      }
    >
      <Image source={{ uri: item?.uri }} />
      <TextContent>
        <MessageInfos>
          <SenderName>{item?.name}</SenderName>
          <LastMessage>Will do, super, thank you!</LastMessage>
        </MessageInfos>
        <RightSide>
          <Date hasSeen={item?.hasSeen?.status}>08:43</Date>
          {!item?.hasSeen?.status ? (
            <NewNoti>
              <NotiCount>{item?.hasSeen?.count}</NotiCount>
            </NewNoti>
          ) : null}
        </RightSide>
      </TextContent>
    </Container>
  );
}
