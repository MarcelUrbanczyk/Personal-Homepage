import { styled } from "styled-components";

export const List = styled.dl`
  margin: 0;
`;

export const LinkName = styled.dt`
  display: inline-block;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  margin: 0;
`;

export const LinkUrl = styled.dd`
  display: inline-block;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  margin: 0;
`;
