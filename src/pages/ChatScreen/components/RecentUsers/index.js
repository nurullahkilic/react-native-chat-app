import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { recentUserStyles as styles } from "./styles";
import { DATA } from "../../../../config/dummy";

function RecentUserItem({ item }) {
  return (
    <TouchableOpacity style={styles.itemContent}>
      <Image style={styles.userImage} source={{ uri: item?.uri }} />
      <Text style={styles.userText}>{item?.name}</Text>
    </TouchableOpacity>
  );
}

export default function RecentUsersSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>RECENT</Text>
      <FlatList
        data={DATA}
        horizontal={true}
        style={{
          paddingHorizontal: 15,
          width: "100%",
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={RecentUserItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
