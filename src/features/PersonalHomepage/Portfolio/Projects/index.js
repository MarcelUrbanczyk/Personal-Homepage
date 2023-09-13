import Success from "./Success";
import Error from "./Error";
import Loading from "./Loading";

const Projects = ({ projects }) => {
  console.log(projects);
  if (projects === "error") {
    return <Error />;
  } else if (projects === "loading") {
    return <Loading />;
  } else {
    return <Success projects={projects} />;
  }
};

export default Projects;
