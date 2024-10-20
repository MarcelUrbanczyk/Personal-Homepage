import { GithubIcon, Wrapper, Header, Description } from "./styled";
import { useState, useEffect } from "react";
import Projects from "./Projects";
import { getProjects } from "./getProjects";
import { Project } from "./Projects/type";

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [getProjectsState, setGetProjectsState] = useState<
    "idle" | "error" | "loading" | "success"
  >("idle");

  useEffect(() => {
    setGetProjectsState("loading");

    const timeoutId = setTimeout(() => {
      getProjects()
        .then((projects) => {
          setGetProjectsState("success");
          setProjects(projects);
        })
        .catch(() => {
          setGetProjectsState("error");
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
      <Projects projects={projects} getProjectsState={getProjectsState} />
    </Wrapper>
  );
};

export default Portfolio;
