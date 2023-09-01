import { GithubIcon, Wrapper, Header, Description } from "./styled";
import Projects from "./Projects";

const Portfolio = () => (
  <Wrapper>
    <GithubIcon />
    <Header>Portfolio</Header>
    <Description>My recent projects</Description>
    <Projects />
  </Wrapper>
);

export default Portfolio;
