import { StyledList, Item, Dot } from "./styled";

interface ListProps {
  skills: string[];
}

const List = ({ skills }: ListProps) => (
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
