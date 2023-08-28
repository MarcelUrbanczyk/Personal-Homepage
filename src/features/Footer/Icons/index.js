import { icons } from "./socials";
import { List, Link, Item } from "./styled";

const IconCollection = () => (
  <List>
    {icons.map(({ name, url, Icon }) => (
      <Item key={name}>
        <Link href={url} title={name} target="_blank">
          <Icon />
        </Link>
      </Item>
    ))}
  </List>
);

export default IconCollection;
