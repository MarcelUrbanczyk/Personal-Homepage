import { icons } from "./socials";
import { List, Item } from "./styled";

const IconCollection = () => (
  <List>
    {icons.map(({ name, url, Icon }) => (
      <Item key={name}>
        <a href={url} title={name} target="_blank" rel="noreferrer">
          <Icon />
        </a>
      </Item>
    ))}
  </List>
);

export default IconCollection;
