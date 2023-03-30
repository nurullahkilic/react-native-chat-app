import { Container, HeaderText, SearchButton } from "./styles";
import BackButton from "./components/BackButton";
import { Search } from "../../components/icons";

export default function MessagesHeader() {
  return (
    <Container>
      <BackButton/>
      <HeaderText>Messages</HeaderText>
      <SearchButton onPress={() => alert("Search")} underlayColor="transparent">
        <Search width={28} height={28} />
      </SearchButton>
    </Container>
  );
}
