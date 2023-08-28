import { styled } from "styled-components";

export const List = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
`;

export const Link = styled.a`
  margin: 0;
`;

export const StyleIcon = (Icon) => styled(Icon)`
  height: auto;
`;

export const Item = styled.li`
  margin: 0;
  padding: 0;
  margin-right: 24px;
`;
