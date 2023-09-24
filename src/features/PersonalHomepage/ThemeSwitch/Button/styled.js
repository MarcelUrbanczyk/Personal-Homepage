import { styled, css } from "styled-components";
import { ReactComponent as SunIcon } from "./brightness1.svg";
import { ReactComponent as SwitchIcon } from "./bg.svg";

export const StyledButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Sun = styled(SunIcon)`
  color: ${({ theme }) => theme.colors.themeSwitch.sun};
`;

export const Switch = styled(SwitchIcon)`
  align-items: center;
  color: ${({ theme }) => theme.colors.themeSwitch.background};
  display: flex;
  stroke: ${({ theme }) => theme.colors.themeSwitch.stroke};
`;

export const Bullet = styled.span`
  align-items: center;
  background: ${({ theme }) => theme.colors.themeSwitch.bullet};
  border-radius: 50%;
  display: flex;
  height: 20px;
  justify-content: center;
  margin: 3px;
  position: absolute;
  transition: transform 0.3s;
  width: 20px;
  ${({ movetoright }) =>
    movetoright &&
    css`
      transform: translateX(20px);
    `};
`;
