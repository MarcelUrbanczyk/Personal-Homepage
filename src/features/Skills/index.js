import { List, Item, Dot } from "./styled";

const Skills = ({ skills }) => (
  <List>
    {skills.map((skill) => (
      <Item key={skill}>
        <Dot />
        {skill}
      </Item>
    ))}
  </List>
);

export default Skills;
