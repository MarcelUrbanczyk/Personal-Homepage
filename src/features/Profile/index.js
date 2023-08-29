import Portrait from "./Portrait";
import HireButton from "./HireButton";
import { Container, ThisIs, Name, Wrapper, Description } from "./styled";

const Profile = () => (
  <Container>
    <Portrait />
    <Wrapper>
      <ThisIs>This Is</ThisIs>
      <Name>Marcel Urbańczyk</Name>
      <Description>dawdasfawdafwefawef</Description>
      <HireButton />
    </Wrapper>
  </Container>
);

export default Profile;
