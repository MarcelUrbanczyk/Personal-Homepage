import axios from "axios";

const url = "https://api.github.com/users/MarcelUrbanczyk/repos";

export const getProjects = async () => {
  const response = await axios.get(url);
  if (!response.ok) new Error(response.statusText);

  return await response.data;
};
