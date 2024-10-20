import { Tile, Title, Wrapper, Description, Container } from "./styled";
import LinkList from "./LinkList";
import { Project } from "../type";

interface SuccessProps {
  projects: Project[];
}

const Success = ({ projects }: SuccessProps) => (
  <Wrapper>
    {projects
      ? projects.map(
          ({ id, name, description, html_url, homepage }: Project) => (
            <Tile key={id}>
              <Container>
                <Title>{name}</Title>
                <Description>{description}</Description>
                <LinkList codeUrl={html_url} demoUrl={homepage} />
              </Container>
            </Tile>
          )
        )
      : ""}
  </Wrapper>
);

export default Success;
