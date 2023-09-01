import { styled } from "styled-components";

export const List = styled.dl`
  margin: 0;
`;

export const LinkName = styled.dt`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text.secondaryText};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  margin: 0;
`;

export const LinkUrl = styled.dd`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text.primaryBlue};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  margin: 0;
`;

export const LinkRow = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
  grid-gap: 8px;
  &:nth-child(1) {
    margin-bottom: 8px;
  }
`;
