import { styled } from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.button.background};
  border: 1px solid ${({ theme }) => theme.colors.button.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.button.text};
  cursor: pointer;
  display: inline-flex;
  font-family: "Inter";
  font-size: 20px;
  font-weight: 600;
  gap: 16px;
  letter-spacing: 1px;
  margin-top: 32px;
  padding: 12px 16px;
  transition: 0.3s;

  &:active {
    box-shadow: ${({ theme }) => theme.colors.button.activeBoxShadow};
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.colors.button.focusBoxShadow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    margin-top: 24px;
  }
`;
