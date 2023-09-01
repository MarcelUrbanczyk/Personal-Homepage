import { styled } from "styled-components";

export const Tile = styled.div`
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.colors.border.primaryBorder};
  box-sizing: border-box;
  padding: 56px;
  width: 592px;
  height: 322px;
  background-color: ${({ theme }) => theme.colors.background.boxBackground};
  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.border.blueBorder};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 480px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text.primaryBlue};
  font-size: 24px;
  letter-spacing: 1.2px;
  margin: 0;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 32px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondaryText};
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.9px;
  margin: 0;
`;
