import { styled } from "styled-components";

export const List = styled.dl`
  margin: 0;
`;

export const Link = styled.a`
  border-bottom: 1px solid rgba(3, 102, 214, 0.2);
  color: ${({ theme }) => theme.colors.text.primaryBlue};
  font-size: 18px;
  letter-spacing: 0.9px;
  line-height: 1.4;
  padding: 1px;
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

export const Name = styled.dt`
  color: ${({ theme }) => theme.colors.text.secondaryText};
  display: inline-block;
  font-size: 18px;
  letter-spacing: 0.9px;
  line-height: 1.4;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 4em 1fr;

  &:nth-child(1) {
    margin-bottom: 8px;
  }
`;

export const Url = styled.dd`
  display: inline-block;
  margin: 0;
`;
