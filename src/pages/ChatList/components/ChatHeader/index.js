import { TouchableHighlight, Image, View, Text } from "react-native";
import { chatHeaderStyle as styles } from "./styles";
import { Search, ArrowLeft } from "../../../../components/icons";
import { colors } from "../../../../config/colors";

import { useModal} from "../../../../context/ModalContext"

function BackButton({ navigation }) {
  return (
    <TouchableHighlight
      onPress={() => navigation.goBack()}
      style={styles.goBack}
      underlayColor="transparent"
    >
      <View style={styles.goBackInner}>
        <ArrowLeft
          fill={colors.safe}
          width={40}
          height={40}
          style={styles.arrowIcon}
        />
        <Text style={styles.unreadedMessages}>12</Text>
      </View>
    </TouchableHighlight>
  );
}

function UserInfos({ name, uri }) {

  const { openModal } = useModal();
  return (
    <View style={styles.userInfos}>
      <TouchableHighlight
        onPress={openModal}
        underlayColor="transparent"
      >
        <Image
          style={{ width: 44, height: 44, borderRadius: 99999 }}
          source={{ uri }}
        />
      </TouchableHighlight>
      <View style={styles.userText}>
        <Text style={styles.headerText}>{name}</Text>
        <Text style={styles.subText}>çevrimiçi</Text>
      </View>
    </View>
  );
}

export default function ChatHeader({ name, uri, navigation, setIsOpen }) {
  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <UserInfos name={name} uri={uri}/>
      <TouchableHighlight
        onPress={() => alert("Search")}
        style={styles.searchButton}
        underlayColor="transparent"
      >
        <Search width={28} height={28} />
      </TouchableHighlight>
    </View>
  );
}
