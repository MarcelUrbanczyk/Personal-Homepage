import { List, Item } from "./styled";

const SkillList = ({ skills }) => (
  <List>
    {skills.map((skill) => (
      <Item key={skill}>{skill}</Item>
    ))}
  </List>
);

export default SkillList;
