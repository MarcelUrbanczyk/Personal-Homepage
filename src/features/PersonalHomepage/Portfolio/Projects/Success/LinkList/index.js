import { List, LinkName, LinkUrl, LinkRow } from "./styled";

const LinkList = ({ demoUrl, codeUrl }) => (
  <List>
    <LinkRow>
      <LinkName>Demo:&nbsp;</LinkName>
      <LinkUrl>{demoUrl}</LinkUrl>
    </LinkRow>
    <LinkRow>
      <LinkName>Code:&nbsp;</LinkName>
      <LinkUrl>{codeUrl}</LinkUrl>
    </LinkRow>
  </List>
);

export default LinkList;
