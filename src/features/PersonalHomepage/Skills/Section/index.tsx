import { Container, Header, Divider, Content } from "./styled";

interface SectionProps {
  title: string;
  content: React.ReactElement;
}

const Section = ({ title, content }: SectionProps) => (
  <Container>
    <Header>{title}</Header>
    <Divider />
    <Content>{content}</Content>
  </Container>
);

export default Section;
