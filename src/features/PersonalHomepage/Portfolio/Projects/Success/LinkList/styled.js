import { styled } from "styled-components";

export const List = styled.dl`
  margin: 0;
`;

export const Name = styled.dt`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text.secondaryText};
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.9px;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const Url = styled.dd`
  display: inline-block;
  margin: 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text.primaryBlue};
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.9px;
  text-decoration: none;
  &:visited {
    color: none;
  }
  &:active {
    color: none;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
  grid-gap: 8px;
  &:nth-child(1) {
    margin-bottom: 8px;
  }
`;
