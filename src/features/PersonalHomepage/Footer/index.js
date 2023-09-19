import { StyledFooter, LetsTalk, Email, Description } from "./styled";
import IconCollection from "./Icons";
import { footerDescription, email } from "../data";

const Footer = () => (
  <StyledFooter>
    <LetsTalk>Lets Talk!</LetsTalk>
    <a href={`mailto:${email}`}>
      <Email>{email}</Email>
    </a>
    <Description>{footerDescription}</Description>
    <IconCollection />
  </StyledFooter>
);

export default Footer;
