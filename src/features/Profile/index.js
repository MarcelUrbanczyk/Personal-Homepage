import Portrait from "./Portrait";
import {
  Container,
  ThisIs,
  Name,
  Wrapper,
  Description,
  HireButton,
  MailIcon,
} from "./styled";

const Profile = () => (
  <Container>
    <Portrait></Portrait>
    <Wrapper>
      <ThisIs>This Is</ThisIs>
      <Name>Marcel Urbańczyk</Name>
      <Description>dawdasfawdafwefawef</Description>
      <HireButton>
        <MailIcon /> Hire Me
      </HireButton>
    </Wrapper>
  </Container>
);

export default Profile;
