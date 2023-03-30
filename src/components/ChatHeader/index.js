import { TouchableHighlight } from "react-native";
import { Container,SearchWrapper} from "./styles";
import { Search } from "../icons";
import BackButton from "./components/BackButton";
import UserInfos from "./components/UserInfos";


export default function ChatHeader({ name, uri }) {
  return (
    <Container>
      <BackButton />
      <UserInfos name={name} uri={uri}/>
      <SearchWrapper
        onPress={() => alert("Search")}
        underlayColor="transparent"
      >
        <Search width={24} height={24} />
      </SearchWrapper>
    </Container>
  );
}
