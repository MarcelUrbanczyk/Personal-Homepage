import styled from "styled-components";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  column-gap: 115px;
`;

export const Item = styled.li`
  color: ${({ theme }) => theme.colors.gray};
  font-family: "Inter";
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.9px;
`;
