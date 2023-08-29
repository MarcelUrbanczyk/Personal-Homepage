import Portrait from "./Portrait";
import HireButton from "./HireButton";
import { StyledHeader, ThisIs, Name, Wrapper, Description } from "./styled";

const Header = () => (
  <StyledHeader>
    <Portrait />
    <Wrapper>
      <ThisIs>This Is</ThisIs>
      <Name>Marcel Urbańczyk</Name>
      <Description>dawdasfawdafwefawef</Description>
      <HireButton />
    </Wrapper>
  </StyledHeader>
);

export default Header;
