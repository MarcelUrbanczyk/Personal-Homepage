import { StyledFooter, LetsTalk, Email, Description } from "./styled";
import IconCollection from "./Icons";
import { footerDescription, email } from "../data";

const Footer = () => (
  <StyledFooter>
    <LetsTalk>Lets Talk!</LetsTalk>
    <Email>{email}</Email>
    <Description>{footerDescription}</Description>
    <IconCollection />
  </StyledFooter>
);

export default Footer;
