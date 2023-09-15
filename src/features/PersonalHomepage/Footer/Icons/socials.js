import { ReactComponent as GithubIcon } from "./svgIcons/GitHub.svg";
import { ReactComponent as LinkedInIcon } from "./svgIcons/LinkedIN.svg";
import { StyleIcon } from "./styled";

export const icons = [
  {
    name: "github",
    url: "https://github.com/MarcelUrbanczyk",
    Icon: StyleIcon(GithubIcon),
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/marcel-urbańczyk-33797428b/",
    Icon: StyleIcon(LinkedInIcon),
  },
];
