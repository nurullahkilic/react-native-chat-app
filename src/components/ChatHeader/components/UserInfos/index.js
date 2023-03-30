import { TouchableHighlight, Image, View, Text } from "react-native";
import { Content, UserText, HeaderText, StatusText } from "./styles";
import { useModal } from "../../../../context/ModalContext";
import { useNavigation } from "@react-navigation/native";

export default function UserInfos({ name, uri }) {
  const navigation = useNavigation();
  const { openModal } = useModal();
  
  return (
    <Content>
      <TouchableHighlight onPress={openModal} underlayColor="transparent">
        <Image
          style={{ width: 44, height: 44, borderRadius: 99999 }}
          source={{ uri }}
        />
      </TouchableHighlight>
      <UserText onPress={() => navigation.navigate("UserInfoModal")}>
        <HeaderText>{name}</HeaderText>
        <StatusText>çevrimiçi</StatusText>
      </UserText>
    </Content>
  );
}
