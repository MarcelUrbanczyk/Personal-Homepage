import { Tile, Title, Wrapper, Description, Container } from "./styled";
import LinkList from "./LinkList";

const Success = ({ projects }) => (
  <Wrapper>
    {projects.map(({ id, name, description, html_url, homepage }) => (
      <Tile key={id}>
        <Container>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <LinkList codeUrl={html_url} demoUrl={homepage} />
        </Container>
      </Tile>
    ))}
  </Wrapper>
);

export default Success;
