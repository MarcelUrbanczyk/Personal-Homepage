import { ReactComponent as GithubIcon } from "./svgIcons/GitHub.svg";
import { ReactComponent as LinkedInIcon } from "./svgIcons/LinkedIN.svg";
import { StyleIcon } from "./styled";
import { gitHubUrl, linkedInUrl } from "../../data";

export const icons = [
  {
    name: "github",
    url: gitHubUrl,
    Icon: StyleIcon(GithubIcon),
  },
  {
    name: "linkedin",
    url: linkedInUrl,
    Icon: StyleIcon(LinkedInIcon),
  },
];
