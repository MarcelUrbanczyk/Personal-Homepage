import axios from "axios";
import { apiUrl } from "../data";

export const getProjects = async () => {
  const response = await axios.get(apiUrl);
  if (!response.ok) new Error(response.statusText);

  return await response.data;
};
