import { TouchableHighlight, SafeAreaView, Text } from "react-native";
import { headerStyle as styles } from "./styles";

import { Search } from "../../../../components/icons";

export default function MessagesHeader() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Messages</Text>
      <TouchableHighlight
        onPress={() => alert("Search")}
        style={styles.searchButton}
        underlayColor="transparent"
      >
        <Search width={28} height={28} />
      </TouchableHighlight>
    </SafeAreaView>
  );
}
