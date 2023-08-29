import styled from "styled-components";
import { ReactComponent as DotIcon } from "./Dot.svg";

export const List = styled.ul`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 32px;
  padding: 32px 0 0;
`;

export const Item = styled.li`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.9px;
  list-style: none;
`;

export const Dot = styled(DotIcon)`
  margin: 2px 16px;
`;
