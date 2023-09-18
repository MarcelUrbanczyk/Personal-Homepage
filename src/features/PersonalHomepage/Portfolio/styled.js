import { styled } from "styled-components";
import { ReactComponent as ghIcon } from "./mark-github.svg";

export const GithubIcon = styled(ghIcon)`
  margin: 0 0 12px 0;
`;

export const Wrapper = styled.section`
  margin: 0 0 120px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 0 48px 0;
  }
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.colors.text.primaryText};
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1.5px;
  margin: 0 0 8px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.primaryText};
  margin: 0 0 24px 0;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 1px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;
