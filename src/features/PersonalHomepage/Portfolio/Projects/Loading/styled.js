import { styled, keyframes } from "styled-components";
import { ReactComponent as LoadingSpinnerIcon } from "./icon-spinner.svg";

const spin = keyframes`
to{
    transform: rotate(360deg);
}
`;

export const Wrapper = styled.div`
  margin: 64px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const LoadingMessage = styled.p`
  color: ${({ theme }) => theme.colors.text.primaryText};
  margin: 0 0 48px 0;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 1px;
`;

export const LoadingSpinner = styled(LoadingSpinnerIcon)`
  height: auto;
  margin: 0;
  animation: ${spin} 2s linear infinite;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 100px;
  }
`;
