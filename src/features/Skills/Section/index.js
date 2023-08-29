import { Container, Header, Divider, Content } from "./styled";

const Section = ({ title, content }) => (
  <Container>
    <Header>{title}</Header>
    <Divider />
    <Content>{content}</Content>
  </Container>
);

export default Section;
