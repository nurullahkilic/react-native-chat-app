import { TouchableHighlight } from "react-native";
import { Container,SearchWrapper} from "./styles";
import { Search } from "../icons";
import BackButton from "./components/BackButton";
import UserInfos from "./components/UserInfos";


export default function ChatHeader({ name, uri, navigation }) {
  return (
    <Container>
      <BackButton navigation={navigation} />
      <UserInfos name={name} uri={uri} navigation={navigation}/>
      <SearchWrapper
        onPress={() => alert("Search")}
        underlayColor="transparent"
      >
        <Search width={24} height={24} />
      </SearchWrapper>
    </Container>
  );
}
