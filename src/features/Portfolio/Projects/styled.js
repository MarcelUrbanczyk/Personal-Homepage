import { styled } from "styled-components";

export const Tile = styled.div`
  border-radius: 4px;
  border: 6px solid var(--diff-bg-neutral, rgba(209, 213, 218, 0.3));
  padding: 56px;
  width: 592px;
  height: 322px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
  margin: 0;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 32px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  margin: 0;
`;

export const LinkList = styled.dl`
  margin: 0;
`;

export const LinkName = styled.dt`
  display: inline-block;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  margin: 0;
`;

export const Link = styled.dd`
  display: inline-block;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  margin: 0;
`;
