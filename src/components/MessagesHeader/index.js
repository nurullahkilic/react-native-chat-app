import { Container, HeaderText, SearchButton } from "./styles";
import BackButton from "./components/BackButton";
import { Search } from "../../components/icons";

export default function MessagesHeader({ navigation }) {
  return (
    <Container>
      <BackButton navigation={navigation}/>
      <HeaderText>Messages</HeaderText>
      <SearchButton onPress={() => alert("Search")} underlayColor="transparent">
        <Search width={28} height={28} />
      </SearchButton>
    </Container>
  );
}
