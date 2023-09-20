import { styled } from "styled-components";
import { ReactComponent as WarningIcon } from "./Danger.svg";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 64px 0 0;
  padding: 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 32px 0 0;
  }
`;

export const Warning = styled(WarningIcon)`
  margin: 0 0 16px 0;
`;

export const ErrorHeader = styled.h3`
  color: ${({ theme }) => theme.colors.text.primaryText};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
  margin: 0 0 32px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 18px;
    margin: 0 0 24px 0;
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.text.primaryText};
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1.4;
  margin: 0 0 32px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 16px;
    margin: 0 0 16px 0;
  }
`;
