import { TouchableOpacity, View, Text, Image } from "react-native";
import { chatListItemStyles as styles } from "./styles";

export default function ChatListItem({ item, navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("chatDetails" , { 
        item
      })}
    >
      <Image
        style={[styles.image, styles.shadowProp]}
        source={{ uri: item?.uri }}
      />
      <View style={styles.textContent}>
        <View style={styles.messageInfos}>
          <Text style={styles.senderName}>{item?.name}</Text>
          <Text style={styles.lastMessage}>Will do, super, thank you!</Text>
        </View>
        <View style={styles.rightSide}>
          <Text
            style={[
              styles.date,
              !item?.hasSeen?.status ? styles.unreadedColor : null,
            ]}
          >
            08:43
          </Text>
          {!item?.hasSeen?.status ? (
            <View style={styles.newNoti}>
              <Text style={styles.notiCount}>{item?.hasSeen?.count}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
}
