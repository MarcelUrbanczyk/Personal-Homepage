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
import { name, description, email } from "../data";

const Header = () => (
  <StyledHeader>
    <Portrait />
    <Wrapper>
      <ThisIs>This Is</ThisIs>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <a href={`mailto:${email}`}>
        <Button icon={<Envelope />} text="Hire Me" />
      </a>
    </Wrapper>
  </StyledHeader>
);

export default Header;
