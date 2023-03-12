import { FlatList } from "react-native";

import { DATA } from "../../config/dummy";
import { Container } from "./styles";
import { css } from "@emotion/native";

import ChatListItem from "../ChatListItem";

export default function MessagesSection({ navigation }) {
  return (
    <Container>
      <FlatList
        data={DATA}
        style={css`
          padding-top: 10px;
          width: 100%;
        `}
        showsHorizontalScrollIndicator={false}
        renderItem={(item) => (
          <ChatListItem item={item?.item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
