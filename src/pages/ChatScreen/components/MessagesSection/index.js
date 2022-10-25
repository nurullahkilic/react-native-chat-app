import { SafeAreaView, View, FlatList } from "react-native";
import { DATA } from "../../../../config/dummy";
import { messagesSectionStyles as styles } from "./styles";

import ChatListItem from "./components/ChatListItem";

export default function MessagesSection({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        style={{
          width: "100%",
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={(item) => (
          <ChatListItem item={item?.item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
