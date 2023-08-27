import { Container, Header, Divider, Body, HeaderText } from "./styled";

const Section = ({ title, content }) => (
  <Container>
    <Header>
      <HeaderText>{title}</HeaderText>
    </Header>
    <Divider />
    <Body>{content}</Body>
  </Container>
);

export default Section;
