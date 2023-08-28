import { List, Item, Dot } from "./styled";

const SkillList = ({ skills }) => (
  <List>
    {skills.map((skill) => (
      <Item key={skill}>
        <Dot />
        {skill}
      </Item>
    ))}
  </List>
);

export default SkillList;
