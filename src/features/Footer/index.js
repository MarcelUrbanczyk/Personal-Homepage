import { StyledFooter, LetsTalk, Email, Description } from "./styled";
import IconCollection from "./Icons";

const Footer = () => (
  <StyledFooter>
    <LetsTalk>Lets Talk!</LetsTalk>
    <Email>urbanczyk.marcel04@gmail.com</Email>
    <Description>
      I’m always open to new projects whenever I have the time. If you have a
      website, dashboard or mobile app in mind and need some help to make your
      ideas come to life, feel free to conatct me
    </Description>
    <IconCollection />
  </StyledFooter>
);

export default Footer;
