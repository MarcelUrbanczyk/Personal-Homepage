import { GithubIcon, Wrapper, Header, Description } from "./styled";
import { useState, useEffect } from "react";
import Projects from "./Projects";
import { getProjects } from "./getProjects";

const Portfolio = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    setProjects("loading");

    const timeoutId = setTimeout(() => {
      getProjects()
        .then((projects) => {
          setProjects(projects);
        })
        .catch(() => {
          setProjects("error");
        });
    }, 1000); //to show loader;

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Wrapper>
      <GithubIcon />
      <Header>Portfolio</Header>
      <Description>My recent projects</Description>
      <Projects projects={projects} />
    </Wrapper>
  );
};

export default Portfolio;
