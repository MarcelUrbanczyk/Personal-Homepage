import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondaryText};
  font-size: 18px;
  letter-spacing: 0.9px;
  line-height: 1.4;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.colors.background.boxBackground};
  border: 6px solid ${({ theme }) => theme.colors.border.primaryBorder};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 56px;
  transition: 0.3s;

  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.border.blueBorder};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 440px;
    padding: 36px;
  }
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
  grid-gap: 32px;
  grid-template-columns: repeat(2, auto);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    grid-gap: 16px;
    grid-template-columns: auto;
  }
`;
