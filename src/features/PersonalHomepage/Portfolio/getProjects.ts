import axios from "axios";
import { apiUrl } from "../data";

export const getProjects = async () => {
  const response = await axios.get(apiUrl);

  return await response.data;
};
