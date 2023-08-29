import { GithubIcon, Wrapper, Header, Description } from "./styled";
import Projects from "./Projects";
import { projectObjects } from "./projectObjects";

const Portfolio = () => (
  <Wrapper>
    <GithubIcon />
    <Header>Portfolio</Header>
    <Description>My recent projects</Description>
    <Projects projects={projectObjects} />
  </Wrapper>
);

export default Portfolio;
