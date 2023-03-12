import { Container,Image,Text,SmText} from "./styles";

export default function UserDetailModal() {
 
  return (
    <Container>
      <Image
          source={{ uri : "https://www.vodvilapp.com/static/uploads/1_profile.jpg" }}
          />
        <Text>Nurullah Kılıç</Text>
        <SmText>@nurullah</SmText>
    </Container>
  );
}
