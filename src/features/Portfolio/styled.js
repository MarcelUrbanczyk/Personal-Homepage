import { styled } from "styled-components";
import { ReactComponent as ghIcon } from "../../assets/social icons/mark-github.svg";

export const GithubIcon = styled(ghIcon)`
  margin: 0 0 12px 0;
`;

export const Wrapper = styled.section`
  margin: 0 0 120px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h2`
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1.5px;
  margin: 0 0 8px 0;
`;

export const Description = styled.p`
  margin: 0 0 24px 0;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 1px;
`;
