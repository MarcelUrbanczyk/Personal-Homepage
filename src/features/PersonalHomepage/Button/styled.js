import { styled } from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.button.background};
  color: ${({ theme }) => theme.colors.button.text};
  border: 1px solid ${({ theme }) => theme.colors.button.border};
  border-radius: 4px;
  display: inline-flex;
  padding: 12px 16px;
  gap: 16px;
  font-size: 20.058px;
  margin-top: 32px;
  font-family: "Inter";
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: ${({ theme }) => theme.colors.button.focusBoxShadow};
  }
  &:active {
    box-shadow: ${({ theme }) => theme.colors.button.activeBoxShadow};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    margin-top: 24px;
  }
`;
