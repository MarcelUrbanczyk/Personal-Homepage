import { styled, css } from "styled-components";
import { ReactComponent as SwitchIcon } from "./bg.svg";
import { ReactComponent as BulletIcon } from "./toggle.svg";
import { ReactComponent as SunIcon } from "./brightness 1.svg";

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text.secondaryText};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  margin: 5px 12px 5px 0;
  text-transform: uppercase;
`;

export const Switch = styled(SwitchIcon)`
  position: relative;
  margin: 0;
  padding: 0;
`;

export const Bullet = styled(BulletIcon)`
  transform: ${(props) =>
    props.$DarkMode ? "translate(10% 0%)" : "translate(10% 0%)"};
  position: absolute;

  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Sun = styled(SunIcon)`
  transform: ${(props) =>
    props.$DarkMode ? "translate(10% 0%)" : "translate(10% 0%)"};
  position: absolute;
  margin: 0;
  padding: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
`;
