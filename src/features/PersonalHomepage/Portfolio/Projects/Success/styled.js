import { styled } from "styled-components";

export const Tile = styled.div`
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.colors.border.primaryBorder};
  box-sizing: border-box;
  padding: 56px;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.colors.background.boxBackground};
  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.border.blueBorder};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 36px;
    max-width: 440px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text.primaryBlue};
  font-size: 24px;
  letter-spacing: 1.2px;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    grid-template-columns: auto;
    grid-gap: 16px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondaryText};
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.9px;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;
