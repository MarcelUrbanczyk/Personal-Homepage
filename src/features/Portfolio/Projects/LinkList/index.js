import { List, LinkName, LinkUrl } from "./styled";

const LinkList = ({ demoUrl, codeUrl }) => (
  <List>
    <LinkName>Demo:&nbsp;</LinkName>
    <LinkUrl>{demoUrl}</LinkUrl>
    <br />
    <LinkName>Code:&nbsp;</LinkName>
    <LinkUrl>{codeUrl}</LinkUrl>
  </List>
);

export default LinkList;
