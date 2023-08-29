import { StyledList, Item, Dot } from "./styled";

const List = ({ skills }) => (
  <StyledList>
    {skills.map((skill) => (
      <Item key={skill}>
        <Dot />
        {skill}
      </Item>
    ))}
  </StyledList>
);

export default List;
