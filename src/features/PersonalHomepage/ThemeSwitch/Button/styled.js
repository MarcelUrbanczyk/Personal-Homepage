import { styled } from "styled-components";
import { ReactComponent as SunIcon } from "./brightness 1.svg";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
`;

export const Switch = styled.div`
  width: 48px;
  height: 26px;
  background: ${({ theme }) => theme.colors.themeSwitchButton.background};
  border-radius: 50%;
`;

export const Bullet = styled.span``;

export const Sun = styled(SunIcon)``;
