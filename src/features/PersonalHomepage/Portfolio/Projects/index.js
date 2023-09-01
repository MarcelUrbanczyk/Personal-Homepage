import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjects,
  selectProjects,
  selectLoadingState,
} from "../portfolioSlice";
import { useEffect } from "react";
import Success from "./Success";
import Error from "./Error";
import Loading from "./Loading";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const state = useSelector(selectLoadingState);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  switch (state) {
    case "error":
      return <Error />;

    case "success":
      return <Success projects={projects} />;

    case "loading":
      return <Loading />;

    case "default":
      throw new Error("invalid state");
  }
};

export default Projects;
