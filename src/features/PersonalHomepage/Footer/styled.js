import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  margin: 0;
  width: 691px;
`;

export const LetsTalk = styled.h2`
  color: ${({ theme }) => theme.colors.text.secondaryText};
  margin: 0 0 24px 0;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const Email = styled.p`
  color: ${({ theme }) => theme.colors.text.primaryText};
  margin: 0 0 24px 0;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 1.6px;
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.text.primaryBlue};
    cursor: pointer;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.primaryText};
  margin: 0 0 56px 0;
  width: 670px;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.9px;
`;
