import { Tile, Title, Wrapper, Description } from "./styled";
import LinkList from "./LinkList";

const Projects = () => {
  const projects = [];
  return (
    <Wrapper>
      {projects.map(({ title, description, demoUrl, codeUrl }) => (
        <Tile key={title}>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <LinkList codeUrl={codeUrl} demoUrl={demoUrl} />
        </Tile>
      ))}
    </Wrapper>
  );
};

export default Projects;
