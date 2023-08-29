import { Tile, Title, Wrapper, Description } from "./styled";
import LinkList from "./LinkList";

const Projects = ({ projects }) => {
  return (
    <Wrapper>
      {projects.map(({ title, description, codeUrl, demoUrl }) => {
        <Tile key={title}>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <LinkList codeUrl={codeUrl} demoUrl={demoUrl} />
        </Tile>;
      })}
    </Wrapper>
  );
};

export default Projects;
