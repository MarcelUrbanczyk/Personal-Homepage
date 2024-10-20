import { styled, keyframes } from "styled-components";
import { ReactComponent as LoadingSpinnerIcon } from "./icon-spinner.svg";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 64px 0 0;
  text-align: center;
`;

export const LoadingMessage = styled.p`
  color: ${({ theme }) => theme.colors.text.primaryText};
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1.4;
  margin: 0 0 48px 0;
`;

export const LoadingSpinner = styled(LoadingSpinnerIcon)`
  animation: ${spin} 2s linear infinite;
  height: auto;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 100px;
  }
`;
