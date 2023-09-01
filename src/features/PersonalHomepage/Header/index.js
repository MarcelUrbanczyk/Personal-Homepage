import Portrait from "./Portrait";
import Button from "../Button";
import {
  StyledHeader,
  ThisIs,
  Name,
  Wrapper,
  Description,
  Envelope,
} from "./styled";

const Header = () => (
  <StyledHeader>
    <Portrait />
    <Wrapper>
      <ThisIs>This Is</ThisIs>
      <Name>Marcel Urbańczyk</Name>
      <Description>dawdasfawdafwefawef</Description>
      <Button icon={<Envelope />} text="Hire Me" />
    </Wrapper>
  </StyledHeader>
);

export default Header;
