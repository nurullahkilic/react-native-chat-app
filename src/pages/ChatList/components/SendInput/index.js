import { useState } from "react";

import { View, TextInput } from "react-native";
import { sendInputStyles as styles } from "./styles";
import { colors } from "../../../../config/colors";

import { Camera, Send } from "../../../../components/icons";
import TouchableIcon from "../../../../components/TouchableIcon";

export default function SendInput({ name, uri, navigation }) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TouchableIcon style={styles.cameraIcon} onPress={() => alert("helloo")}>
        <Camera width={19} />
      </TouchableIcon>
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.softText}
        value={text}
        onChangeText={setText}
        selectionColor="white"
        placeholder="Bir şeyler yaz..."
      />
      <TouchableIcon style={styles.sendIcon} onPress={() => alert(text)}>
        <Send width={27} height={27} />
      </TouchableIcon>
    </View>
  );
}
