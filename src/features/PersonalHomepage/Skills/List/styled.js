import styled from "styled-components";
import { ReactComponent as DotIcon } from "../Dot.svg";

export const StyledList = styled.ul`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 32px;
  padding: 32px 0 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    padding: 24px 0 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: auto;
    padding: 18px 0 0;
  }
`;

export const Item = styled.li`
  color: ${({ theme }) => theme.colors.text.secondaryText};
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.9px;
  list-style: none;
  white-space: nowrap;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const Dot = styled(DotIcon)`
  margin: 2px 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 2px 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 2px 12px 2px 6px;
  }
`;
