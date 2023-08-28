import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  margin: 0 0 109px 0;
  width: 691px;
`;

export const LetsTalk = styled.h2`
  color: ${({ theme }) => theme.colors.gray};
  margin: 0 0 24px 0;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const Email = styled.p`
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 24px 0;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 1.6px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 56px 0;
  width: 670px;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.9px;
`;
