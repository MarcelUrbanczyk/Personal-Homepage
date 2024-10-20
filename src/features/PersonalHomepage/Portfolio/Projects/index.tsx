import Success from "./Success";
import Error from "./Error";
import Loading from "./Loading";
import { Project } from "./type";

interface ProjectsProps {
  projects: Project[];
  getProjectsState: string;
}

const Projects = ({ projects, getProjectsState }: ProjectsProps) => {
  if (getProjectsState === "error") {
    return <Error />;
  } else if (getProjectsState === "loading") {
    return <Loading />;
  } else {
    return <Success projects={projects} />;
  }
};

export default Projects;
