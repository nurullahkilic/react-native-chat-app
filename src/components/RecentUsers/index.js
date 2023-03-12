import { FlatList } from "react-native";
import { css } from "@emotion/native";
import {
  Container,
  HeaderText,
  ItemContent,
  UserImage,
  UserText,
} from "./styles";

import { DATA } from "../../config/dummy";

function RecentUserItem({ item }) {
  return (
    <ItemContent>
      <UserImage source={{ uri: item?.uri }} />
      <UserText>{item?.name}</UserText>
    </ItemContent>
  );
}

export default function RecentUsersSection() {
  return (
    <Container>
      <HeaderText>RECENT</HeaderText>
      <FlatList
        data={DATA}
        horizontal={true}
        style={css`
          width: 100%;
          padding: 0 15px;
        `}
        showsHorizontalScrollIndicator={false}
        renderItem={RecentUserItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
