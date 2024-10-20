import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  margin: 0;
`;

export const LetsTalk = styled.h2`
  color: ${({ theme }) => theme.colors.text.secondaryText};
  font-size: 12px;
  line-height: 1.3;
  margin: 0 0 24px 0;
  text-transform: uppercase;
`;

export const Email = styled.p`
  color: ${({ theme }) => theme.colors.text.primaryText};
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 1.6px;
  margin: 0 0 24px 0;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.text.primaryBlue};
    cursor: pointer;
  }

  @media (max-width: 624px) {
    font-size: 28px;
  }

  @media (max-width: 560px) {
    font-size: 20px;
  }

  @media (max-width: 430px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.primaryText};
  font-size: 18px;
  letter-spacing: 0.9px;
  line-height: 1.4;
  margin: 0 0 56px 0;
  max-width: 670px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    margin-bottom: 40px;
  }
`;
